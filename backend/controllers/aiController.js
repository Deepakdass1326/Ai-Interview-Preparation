const Groq = require("groq-sdk");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Sanitize literal control chars inside JSON string values
const sanitizeJson = (text) => {
  return text.replace(/"((?:[^"\\]|\\.)*)"/g, (match, content) => {
    const sanitized = content
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/\t/g, "\\t")
      .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "");
    return `"${sanitized}"`;
  });
};

// @desc    Generate interview questions and answers using Gemini
// @route   POST /api/generate-questions
// @access  Private
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
  return res.status(400).json({ message: "Missing required fields" });
}

const prompt = questionAnswerPrompt(role, experience, topicsToFocus, numberOfQuestions);

const response = await groq.chat.completions.create({
  messages: [{ role: "user", content: prompt }],
  model: "llama-3.3-70b-versatile",
});

let rawText = response.choices[0]?.message?.content || "";

// Clean it: Remove ```json and ``` from beginning and end
const cleanedText = rawText
  .replace(/^```json\s*/, "") // remove starting ```json
  .replace(/```$/, "")        // remove ending ```
  .trim();                    // remove extra spaces

// Sanitize and parse
const data = JSON.parse(sanitizeJson(cleanedText));

res.status(200).json(data);


  } catch (error) {
    res.status(500).json({
      message: error.message || "Failed to generate questions",
      error: error.message,
    });
  }
};

// @desc    Generate explains a interview question
// @route   POST /api/generate-explanation
// @access  Private
const generateConceptExplanation = async (req, res) => {
    
    try {
        const { question} = req.body;
        if (!question) {
  return res.status(400).json({ message: "Missing required fields" });
}

const prompt = conceptExplainPrompt(question);

const response = await groq.chat.completions.create({
  messages: [{ role: "user", content: prompt }],
  model: "llama-3.3-70b-versatile",
});

let rawText = response.choices[0]?.message?.content || "";

// Clean it: Remove ```json and ``` from beginning and end
const cleanedText = rawText
  .replace(/^```json\s*/, "") // remove starting ```json
  .replace(/```$/, "")        // remove ending ```
  .trim();                    // remove extra spaces

// Sanitize and parse
const data = JSON.parse(sanitizeJson(cleanedText));

res.status(200).json(data);

        
    } catch (error) {
        res.status(500).json({
      message: error.message || "Failed to generate explanations",
      error: error.message,
    });
    }
    
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };
