import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

export const Home = () => {
  return (
    <main className="max-w-screen-md mx-auto">
      <SearchBar placeholder="Search for any word..." />
    </main>
  );
};
