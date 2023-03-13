import { useMemo, useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { Word } from "./components/Word";
import { useDictionaryWord } from "./modules/api/hooks/useDictionaryWord";

export const Home = () => {
  const [query, setQuery] = useState(
    new URLSearchParams(document.location.search).get("query") ?? undefined
  );

  const { isLoading, isError, data } = useDictionaryWord(query!, {
    enabled: !!query,
  });

  const word = useMemo(() => data?.[0], [data]);

  return (
    <main className="max-w-screen-md mx-auto">
      <SearchForm onSubmit={({ query }) => setQuery(query)} />
      {word && <Word word={word} className="mt-11" />}
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </main>
  );
};
