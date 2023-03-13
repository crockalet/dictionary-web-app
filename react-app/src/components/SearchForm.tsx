import classNames from "classnames";
import React, { useState } from "react";

export const SearchForm: React.FC<{
  onSubmit?: (values: { query: string }) => void;
}> = ({ onSubmit }) => {
  const [query, setQuery] = useState(
    new URLSearchParams(document.location.search).get("query") ?? undefined
  );
  const [error, setError] = useState<string>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!query) {
      setError("Whoops, can't be empty...");
      return;
    }

    onSubmit?.({ query });
    history.pushState(null, "", new URLSearchParams({ query }).toString());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          value={query}
          onChange={handleChange}
          type="text"
          className={classNames(
            "w-full py-5 px-6 rounded-2xl \
          text-xl font-bold indent-2 \
          bg-gray-100 dark:bg-gray-600 \
          placeholder:text-gray-500/25 dark:placeholder:text-white/25 \
          outline-primary caret-primary active:outline focus:outline"
          )}
          placeholder="Search for any word…"
        />

        <button type="submit" className="absolute right-0 inset-y-0 p-6">
          <img alt="search" src="./images/icon-search.svg" />
        </button>
      </div>
    </form>
  );
};
