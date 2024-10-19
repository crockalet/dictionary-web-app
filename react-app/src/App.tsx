import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Header } from "./components/Header";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Home } from "./Home";
import { queryClient } from "./modules/react-query/queryClient";
import { syncStoragePersister } from "./modules/react-query/syncStoragePersister";
import { SearchQueryContextProvider } from "./modules/search-query/SearchQueryProvider";

export const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: syncStoragePersister }}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      <DarkModeProvider>
        <SearchQueryContextProvider>
          <Header />
          <Home />
        </SearchQueryContextProvider>
      </DarkModeProvider>
    </PersistQueryClientProvider>
  );
};
