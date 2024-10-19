import { useMemo } from "react";
import { SearchForm } from "./components/SearchForm";
import { Word } from "./components/Word";
import { useDictionaryWord } from "./modules/api/hooks/useDictionaryWord";
import { useSearchQuery } from "./modules/search-query/useSearchQuery";
import { ErrorMessage } from "./components/ErrorMessage";

export const Home = () => {
  const { query, setQuery } = useSearchQuery();

  const handleSearch = ({ query }: { query: string }) => {
    setQuery(query);
  };

  const { isLoading, isError, data, error } = useDictionaryWord(query!, {
    enabled: !!query,
    retry: false,
  });

  const word = useMemo(() => data?.[0], [data]);

  return (
    <main className="max-w-screen-md mx-auto">
      <SearchForm onSubmit={handleSearch} />
      {isError && <ErrorMessage title={error.title} message={`${error.message} ${error.resolution}`} />}
      {word && <Word word={word} className="mt-11" />}
    </main>
  );
};
