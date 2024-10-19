import { DictionaryError } from "../exceptions/DictionaryError";
import { DictionaryDto } from "../interfaces/DictionaryDto";

export async function queryDictionaryWord(
  query: string
): Promise<DictionaryDto[]> {
  const url = new URL(
    query,
    "https://api.dictionaryapi.dev/api/v2/entries/en/"
  ).toString();

  const res = await fetch(url, { method: 'GET' });

  if (!res.ok) {
    const error = await res.json();
    
    throw new DictionaryError(
      error.title,
      error.message,
      error.resolution
    );
  }

  return await res.json();
}
