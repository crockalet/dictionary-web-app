import { Definition } from "./Definition";

export interface Meaning {
  partOfSpeech: "noun" | "verb" | "exclamation";
  definitions: Definition[];
}
