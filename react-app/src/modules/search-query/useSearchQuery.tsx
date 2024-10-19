import { useContext } from "react";
import { SearchQueryContext } from "./SearchQueryContext";

export const useSearchQuery = () => {
  const context = useContext(SearchQueryContext);

  if (!context) throw new Error("SearchQueryContextProvider not found");

  return context;
};
