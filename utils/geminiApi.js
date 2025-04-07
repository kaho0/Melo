/**
 * Utility for interacting with Google's Gemini AI API
 */

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_GEMINI_API_URL;

/**
 * Generates a response from Gemini AI based on the user's input
 * @param {string} prompt - The user's question or prompt
 * @param {boolean} isSimpleMode - Whether to generate a simpler explanation
 * @returns {Promise<string>} The AI-generated response
 */
export async function getGeminiResponse(prompt, isSimpleMode = false) {
  try {
    // Add mode-specific context to the prompt
    const contextPrompt = isSimpleMode
      ? `Please explain this in simple terms, as if explaining to a beginner: ${prompt}`
      : `Please provide a detailed technical explanation for: ${prompt}`;

    // Prepare the request body
    const requestBody = {
      contents: [{
        parts: [{
          text: contextPrompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    };

    // Make the API request
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Extract and return the generated text
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to get response from AI. Please try again.');
  }
} 