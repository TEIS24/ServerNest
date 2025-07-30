declare module 'openai' {
  export default class OpenAI {
    constructor(config: { apiKey: string; dangerouslyAllowBrowser?: boolean });
    
    chat: {
      completions: {
        create(params: {
          model: string;
          messages: Array<{
            role: 'system' | 'user' | 'assistant';
            content: string;
          }>;
          max_tokens?: number;
          temperature?: number;
          presence_penalty?: number;
          frequency_penalty?: number;
        }): Promise<{
          choices: Array<{
            message?: {
              content?: string;
            };
          }>;
        }>;
      };
    };
  }
}