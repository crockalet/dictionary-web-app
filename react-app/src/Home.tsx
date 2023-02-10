import { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { useDictionaryWord } from "./modules/api/hooks/useDictionaryWord";

export const Home = () => {
  const [query, setQuery] = useState(
    new URLSearchParams(document.location.search).get("query") ?? undefined
  );

  const { isLoading, isError, data } = useDictionaryWord(query!, {
    enabled: !!query,
  });

  return (
    <main className="max-w-screen-md mx-auto">
      <SearchForm onSubmit={({ query }) => setQuery(query)} />
      {JSON.stringify(data)}
    </main>
  );
};
