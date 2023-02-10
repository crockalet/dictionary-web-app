import { useMemo, useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { debounce } from "lodash";

export const Home = () => {
  return (
    <main className="max-w-screen-md mx-auto">
      <SearchForm />
    </main>
  );
};
