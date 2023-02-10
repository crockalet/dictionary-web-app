import { DictionaryDto } from "../interfaces/DictionaryDto";

export async function queryDictionaryWord(
  query: string
): Promise<DictionaryDto[]> {
  const url = new URL(
    query,
    "https://api.dictionaryapi.dev/api/v2/entries/en/"
  ).toString();

  return await (await fetch(url, { method: "GET" })).json();
}
