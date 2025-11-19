import { GoogleGenAI, ChatSession, GenerationConfig } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: ChatSession | null = null;

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const initializeChat = async () => {
  try {
    const model = "gemini-2.5-flash";
    
    const config: GenerationConfig = {
      temperature: 0.7,
      systemInstruction: SYSTEM_INSTRUCTION,
    };

    chatSession = ai.chats.create({
      model,
      config
    });
    
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    const success = await initializeChat();
    if (!success) {
      return "I'm currently offline (API Key missing or invalid). Please try again later.";
    }
  }

  try {
    // We are sure chatSession is initialized here if success was true, 
    // but TypeScript might complain if we don't check again or assert.
    if (!chatSession) throw new Error("Chat session not initialized");

    const result = await chatSession.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Error sending message:", error);
    return "I encountered a technical glitch. Please try again.";
  }
};