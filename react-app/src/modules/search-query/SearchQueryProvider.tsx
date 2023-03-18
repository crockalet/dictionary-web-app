import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SearchQueryContext } from "./SearchQueryContext";

// TODO: change query on history change
// TODO: add preload function
export const SearchQueryContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const url = useRef(new URL(document.location.href));

  const [query, setQuery] = useState<string | undefined>();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setQuery(
      new URLSearchParams(document.location.search).get("query") ?? undefined
    );

    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (!query) {
      url.current.searchParams.delete("query");
    } else {
      url.current.searchParams.set("query", query);
    }

    history.pushState(null, "", url.current);
    console.log("effect", query);
  }, [query]);

  return (
    <SearchQueryContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
};
