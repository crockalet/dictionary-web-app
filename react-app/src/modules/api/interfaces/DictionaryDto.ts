import { Meaning } from "./Meaning";
import { Phonetic } from "./Phonetic";

export interface DictionaryDto {
  word: string;
  phonetic: string;
  phonetics?: Phonetic[];
  origin: string;
  meanings: Meaning[];
  sourceUrls: string[];
}
