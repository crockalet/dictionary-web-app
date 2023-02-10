import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Home } from "./Home";
import { queryClient } from "./modules/react-query/queryClient";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Header />
        <Home />
      </DarkModeProvider>
    </QueryClientProvider>
  );
};
