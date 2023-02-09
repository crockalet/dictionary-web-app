import { useMemo, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { debounce } from "lodash";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState(
    new URLSearchParams(document.location.search).get("query")
  );

  // on submit
  // history.pushState(
  //   null,
  //   "",
  //   query ? new URLSearchParams({ query }).toString() : "/"
  // );

  return (
    <main className="max-w-screen-md mx-auto">
      <SearchBar
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery ?? ""}
        placeholder="Search for any word..."
      />
    </main>
  );
};
