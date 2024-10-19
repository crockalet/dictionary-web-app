export class DictionaryError extends Error {
  constructor(
    public readonly title: string,
    public readonly message: string,
    public readonly resolution: string
  ) {
    super();
  }
}