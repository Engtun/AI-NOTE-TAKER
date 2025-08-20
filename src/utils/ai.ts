import { openai } from './openai'; // Assuming you have an OpenAI client set up

export const summarizeText = async (text: string): Promise<string> => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Summarize the following text:\n\n${text}`,
        max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
};

export const askQuestion = async (question: string, context: string): Promise<string> => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Answer the following question based on the context provided:\n\nContext: ${context}\nQuestion: ${question}`,
        max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
};