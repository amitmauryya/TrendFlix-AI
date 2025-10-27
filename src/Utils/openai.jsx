// src/Utils/openai.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // apni OpenAI key
  dangerouslyAllowBrowser: true, // sirf frontend ke liye
});

export default openai;
