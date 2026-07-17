import { AIContext } from './ai-context';

export const GEMINI_SYSTEM_PROMPT = `
You are a professional South Indian culinary guide and AI kitchen assistant for the DailyMeal AI application.
Your goal is to explain and enhance the rule-based meal recommendations. You must NOT contradict the rule-based recommendations or modify the match scores.
Your responsibilities:
1. Explain why the recommended meal was chosen based on the provided structured context.
2. Suggest ingredient substitutions (especially matching the ones defined in substitutions.ts, e.g. Tamarind for Tomato).
3. Give practical South Indian cooking tips (e.g. fermenting batter, balancing spices, tempering details).
4. Recommend 2 alternative South Indian meals that fit the user's diet and meal type preferences.
5. Answer follow-up cooking questions from the user in a warm, expert tone.

CRITICAL INSTRUCTIONS:
- Format your response using clean Markdown with clear headings and bullet lists.
- Match the user's active language: write exclusively in Tamil if the language parameter is 'ta', and write in English if 'en'.
- Maintain a helpful, traditional kitchen expert persona.
`;

/**
 * Communicates with the Gemini 2.5 Flash API to get context-aware answers.
 * Incorporates a graceful mock mode when GEMINI_API_KEY is not defined in the environment.
 */
export const generateAIChatResponse = async (
  chatHistory: Array<{ role: 'user' | 'assistant'; content: string }>,
  context: AIContext,
  language: string
): Promise<string> => {
  const apiKey = process.env.GEMINI_API_KEY;

  // Graceful Mock Mode Fallback if API key is not configured
  if (!apiKey) {
    console.warn('GEMINI_API_KEY is not configured in environment variables. Falling back to Mock Mode.');
    
    // Simulate API network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mealName = context.recommendedMeal
      ? (language === 'en' ? context.recommendedMeal.en : context.recommendedMeal.ta)
      : (language === 'en' ? 'your custom meal' : 'உணவு');

    const score = context.matchScore;

    if (language === 'ta') {
      return `### 🌟 சமையலறை AI உதவியாளர் அறிக்கை

இன்றைய உங்களுக்கான சிறந்த உணவுப் பரிந்துரை: **${mealName}** (பொருத்தம்: **${score}%**)!

#### 1. ஏன் இந்தப் பரிந்துரை?
* **விருப்பத்தேர்வுகள் பொருத்தம்**: இந்த உணவு உங்களது உணவுப் பழக்கவழக்கங்கள் மற்றும் அதிகபட்ச சமையல் நேரத்திற்குள் சமைக்கக்கூடியது.
* **பயன்பாட்டுத் திறன்**: உங்களிடம் உள்ள சமையல் பொருட்களில் பெரும்பாலானவை இதில் பயன்படுத்தப்படுகின்றன.

#### 2. மாற்றுப் பொருட்கள் மற்றும் சமையல் குறிப்புகள்
* **தக்காளி இல்லையா?** தக்காளி இல்லாதபோது அதற்குப் பதிலாகப் புளியைப் பயன்படுத்தலாம்.
* **ருசி அதிகரிக்க**: சாம்பார் அல்லது குழம்பு தயாரிக்கும் போது கடுகு, வெந்தயம் மற்றும் கறிவேப்பிலை தாளித்துச் சேர்த்தால், சிறந்த பாரம்பரியச் சுவை கிடைக்கும்.

#### 3. மாற்றுப் பரிந்துரைகள்
* **இட்லி அல்லது தோசை**: உங்களிடம் அரிசி மற்றும் உளுந்து இருந்தால், இட்லி அல்லது காரச் சட்னியுடன் தோசை சிறந்த மாற்றாகும்.
* **ரவா உப்புமா**: ரவை மற்றும் வெங்காயம் இருந்தால், 15 நிமிடங்களில் எளிதாகச் சமைக்கலாம்.

*உங்களுக்கு ஏதேனும் சமையல் குறிப்புகள் தேவையா? கீழே உள்ள பெட்டியில் என்னிடம் கேளுங்கள்!*`;
    } else {
      return `### 🌟 AI Kitchen Assistant Insights

Today's top rule-based recommendation is **${mealName}** with a match score of **${score}%**!

#### 1. Why was this meal selected?
* **Dietary Alignment**: Fully matches your dietary preference and cooking duration limit.
* **Utilization**: Effectively uses your selected kitchen ingredients while respecting avoided items.

#### 2. Substitutions & Cooking Tips
* **No Tomato?** If you are missing tomato, you can use tamarind extract for the required acidity.
* **Flavor Secret**: Tempering with mustard seeds, fenugreek, and curry leaves in warm coconut oil will elevate the aroma of this dish.

#### 3. Alternative Meal Ideas
* **Idli with Chutney**: A perfect breakfast alternative requiring rice and lentils.
* **Rava Upma**: A quick 15-minute meal if you have semolina, onions, and green chillies.

*Would you like to know the step-by-step recipe or spice adjustments? Ask me in the chat below!*`;
    }
  }

  // API Call Execution
  try {
    const formattedContents = [
      // Pass the structured AI context as a separate grounded message block
      {
        role: 'user',
        parts: [{ text: `Here is the structured kitchen context: ${JSON.stringify(context)}. Please use this to answer all user questions.` }]
      },
      // Append historical messages
      ...chatHistory.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: formattedContents,
          systemInstruction: {
            parts: [{ text: GEMINI_SYSTEM_PROMPT + `\nActive Language: ${language === 'ta' ? 'Tamil' : 'English'}` }]
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error (status ${response.status}): ${errText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('Invalid response structure received from Gemini API');
    }

    return generatedText;
  } catch (error) {
    console.error('Gemini API Integration Failure:', error);
    throw error;
  }
};
