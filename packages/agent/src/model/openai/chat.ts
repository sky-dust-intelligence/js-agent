import { GeneratorModel } from "../../text/generate/GeneratorModel";
import {
  OpenAIChatCompletion,
  OpenAIChatCompletionModel,
  OpenAIChatMessage,
} from "../../api/openai/OpenAIChatCompletion";
import { generateChatCompletion } from "../../api/openai/generateChatCompletion";

export const chat = ({
  baseUrl,
  apiKey,
  model,
  temperature = 0,
  maxTokens,
}: {
  baseUrl?: string;
  apiKey: string;
  model: OpenAIChatCompletionModel;
  temperature?: number;
  maxTokens?: number;
}): GeneratorModel<OpenAIChatMessage[], OpenAIChatCompletion, string> => ({
  vendor: "openai",
  name: model,
  generate: async (input: OpenAIChatMessage[]): Promise<OpenAIChatCompletion> =>
    generateChatCompletion({
      baseUrl,
      apiKey,
      messages: input,
      model,
      temperature,
      maxTokens,
    }),
  extractOutput: async (rawOutput: OpenAIChatCompletion): Promise<string> => {
    return rawOutput.choices[0]!.message.content;
  },
});
