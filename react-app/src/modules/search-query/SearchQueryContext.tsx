import { createContext } from "react";

interface TSearchQueryContext {
  query?: string;
  setQuery: (query?: string) => void;
}

export const SearchQueryContext = createContext<TSearchQueryContext>({
  setQuery: () => {},
});
