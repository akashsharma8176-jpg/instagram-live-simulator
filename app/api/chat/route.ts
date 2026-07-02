import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

export async function POST(request: Request) {
  try {
    const { userSpeech } = await request.json();

    if (!userSpeech) {
      return NextResponse.json({ immediate_comments: [], contextual_fillers: [] });
    }

    const randomCount = Math.floor(Math.random() * 4) + 1; 

    // UPGRADED PROMPT: Removed trigger words that trip Gemini's safety filters
    const prompt = `
      The streamer just said this on an Indian Instagram Live: "${userSpeech}"

      Generate a highly realistic, chaotic audience reaction. 
      Language: Hinglish (Hindi in English script), pure Hindi, and Gen-Z Indian internet slang.

      You must return a JSON object containing EXACTLY TWO keys:
      1. "immediate_comments": Exactly ${randomCount} short comments reacting directly to the streamer right now (1-6 words each). Use safe slang like 'bhai', 'OP', 'kya baat hai', 'pagal', 'mast', 'lol', 'arre'.
      2. "contextual_fillers": A list of 10 short follow-up phrases, background chatter, or related questions that OTHER viewers might say over the next 30 seconds discussing this same topic. 

      Output ONLY valid JSON matching this exact shape, no markdown formatting:
      {
        "immediate_comments": [
          {"user": "username1", "text": "immediate reaction text", "avatar": "U"}
        ],
        "contextual_fillers": [
          "contextual background chat 1",
          "contextual background chat 2"
        ]
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: prompt,
    });

    const responseText = response.text?.trim() || '{}';
    
    // Aggressive JSON cleaner just in case Gemini hallucinates markdown blocks
    const cleanJsonString = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    const parsedData = JSON.parse(cleanJsonString);

    return NextResponse.json(parsedData);
  } catch (error) {
    // This logs the ACTUAL reason it failed into your VS Code terminal
    console.error("❌ Gemini API backend failed:", error);
    
    // FAILSAFE: If Gemini blocks it or crashes, send back a realistic lag comment
    // so your frontend chat keeps moving and you know something went wrong!
    return NextResponse.json({ 
      immediate_comments: [
        { user: "system_lag", text: "bhai net slow hai kya tera? 📶", avatar: "S" }
      ], 
      contextual_fillers: ["lag", "awaz nahi aa rahi", "hello?"] 
    });
  }
}