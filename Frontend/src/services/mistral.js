import axios from "axios";

const MISTRAL_API_KEY = "Dqa6NVB3wtarl5hNrI9tsbSt97GW0BGe";
const API_URL = "https://api.mistral.ai/v1/chat/completions";

export const generateResponse = async (messages) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "mistral-tiny",
        messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MISTRAL_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling Mistral API:", error);
    throw error;
  }
};
