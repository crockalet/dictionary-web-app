import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function Home() {
  return (
    <main className="max-w-screen-md mx-auto">
      <SearchBar />
    </main>
  );
}

export default Home;
