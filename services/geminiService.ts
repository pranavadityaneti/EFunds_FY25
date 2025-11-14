import { GoogleGenAI } from "@google/genai";
import { GET_LOAN_OFFERS_PROMPT, LOAN_OFFER_SCHEMA } from '../constants';
import type { UserProfile, LoanOffer } from '../types';

let ai: GoogleGenAI | null = null;
if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getLoanOffers = async (profile: UserProfile): Promise<LoanOffer[] | string> => {
    if (!ai) return "AI service not initialized. Please check your API key.";
    try {
        const prompt = GET_LOAN_OFFERS_PROMPT(profile);
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: LOAN_OFFER_SCHEMA,
            }
        });
        
        const jsonString = response.text.trim();
        return JSON.parse(jsonString) as LoanOffer[];
    } catch (error) {
        console.error("Error getting loan offers from Gemini:", error);
        return "I apologize, but I couldn't fetch the loan offers at this moment. There might be an issue with the AI service or the data format I received.";
    }
};