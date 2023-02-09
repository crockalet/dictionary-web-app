import React from "react";
import { Header } from "./components/Header";
import { Home } from "./Home";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export const App = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Home />
    </DarkModeProvider>
  );
};
