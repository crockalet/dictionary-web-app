import { Definition } from "./Definition";

export interface Meaning {
  partOfSpeech: "noun" | "verb" | "exclamation";
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}
