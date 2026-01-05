
import { GoogleGenAI, Type } from "@google/genai";

export const analyzeResume = async (input, jobContext) => {
    // Initialize GoogleGenAI with the required named parameter and environment variable.

    console.log("hello", import.meta.env.VITE_GEMINI_API_KEY);
    
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    const instructionPart = {
        text: `
      You are an expert technical recruiter and career coach. 
      Analyze the provided resume (which may be text, an image, or a PDF) against the provided job context.

      ${jobContext ? `
      TARGET JOB DETAILS:
      Title: ${jobContext.title}
      Company: ${jobContext.company}
      Description: ${jobContext.description}
      Requirements: ${jobContext.requirements}
      
      TASK:
      1. Calculate a "Match Score" (0-100) based on how well the candidate's experience and skills align with THIS SPECIFIC job.
      2. Identify specific detected skills from the resume.
      3. Identify MISSING skills or experience gaps that the job requires but are absent from the resume.
      4. Provide actionable suggestions to tailor this resume specifically for this ${jobContext.title} role.
      ` : `
      GENERAL ANALYSIS:
      Provide a general technical profile analysis since no specific job was provided.
      `}

      Extract the details in JSON format.
    `
    };

    const parts = [instructionPart];

    if (input.text) {
        parts.push({ text: `RESUME TEXT CONTENT:\n${input.text}` });
    }

    if (input.file) {
        parts.push({
            inlineData: {
                mimeType: input.file.mimeType,
                data: input.file.data
            }
        });
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: { parts },
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        score: { type: Type.NUMBER },
                        detectedSkills: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        },
                        missingSkills: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        },
                        suggestions: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        },
                        summary: { type: Type.STRING }
                    },
                    required: ["score", "detectedSkills", "missingSkills", "suggestions", "summary"]
                }
            }
        });

        // Extract text from GenerateContentResponse using the .text property.
        const result = JSON.parse(response.text || "{}");
        return result;
    } catch (error) {
        console.error("Gemini Analysis Error:", error);
        throw new Error("Failed to analyze resume. Please try again.");
    }
};

export const generateJobDescription = async (role, experience, techStack) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
    As a professional HR specialist, generate a compelling and professional job description for the following role:
    
    Role: ${role}
    Experience Required: ${experience}
    Tech Stack / Key Skills: ${techStack}
    
    The description should include:
    1. A brief "About the Role" section.
    2. Key Responsibilities.
    3. What we are looking for.
    4. Why join us.
    
    Keep the tone professional yet inviting. Do not use markdown headers like # or ##, use clear spacing and bullet points.
  `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt
        });

        return response.text || "Failed to generate description.";
    } catch (error) {
        console.error("Gemini JD Generation Error:", error);
        throw new Error("Failed to generate job description.");
    }
};
