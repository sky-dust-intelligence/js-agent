import { GeneratorModel } from "../../text/generate/GeneratorModel";
import {
  OpenAITextCompletion,
  OpenAITextCompletionModel,
} from "../../api/openai/OpenAITextCompletion";
import { generateTextCompletion } from "../../api/openai/generateTextCompletion";

export const text = ({
  baseUrl,
  apiKey,
  model,
  temperature = 0,
  maxTokens,
}: {
  baseUrl?: string;
  apiKey: string;
  model: OpenAITextCompletionModel;
  temperature?: number;
  maxTokens?: number;
}): GeneratorModel<string, OpenAITextCompletion, string> => ({
  vendor: "openai",
  name: model,
  generate: async (input: string): Promise<OpenAITextCompletion> =>
    generateTextCompletion({
      baseUrl,
      apiKey,
      prompt: input,
      model,
      temperature,
      maxTokens,
    }),
  extractOutput: async (rawOutput: OpenAITextCompletion): Promise<string> => {
    return rawOutput.choices[0]!.text;
  },
});
