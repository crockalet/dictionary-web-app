import { useMemo } from "react";
import { SearchForm } from "./components/SearchForm";
import { Word } from "./components/Word";
import { useDictionaryWord } from "./modules/api/hooks/useDictionaryWord";
import { useSearchQuery } from "./modules/search-query/useSearchQuery";

export const Home = () => {
  const { query, setQuery } = useSearchQuery();

  const handleSearch = ({ query }: { query: string }) => {
    setQuery(query);
  };

  const { isLoading, isError, data } = useDictionaryWord(query!, {
    enabled: !!query,
  });

  const word = useMemo(() => data?.[0], [data]);

  return (
    <main className="max-w-screen-md mx-auto">
      <SearchForm onSubmit={handleSearch} />
      {word && <Word word={word} className="mt-11" />}
    </main>
  );
};
