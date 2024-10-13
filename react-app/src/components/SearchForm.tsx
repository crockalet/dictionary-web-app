import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useSearchQuery } from "../modules/search-query/useSearchQuery";

export const SearchForm: React.FC<{
  onSubmit?: (values: { query: string }) => void;
}> = ({ onSubmit }) => {
  const { query } = useSearchQuery();

  const [value, setValue] = useState(
    new URLSearchParams(document.location.search).get("query") ?? ""
  );

  const [error, setError] = useState<string>();

  useEffect(() => {
    setValue(query ?? "");
  }, [query]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setError(!value ? "Whoops, can't be empty ..." : undefined);

    onSubmit?.({ query: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            value={value}
            onChange={handleChange}
            type="text"
            className={classNames(
              "w-full py-5 px-6 rounded-2xl \
            text-xl font-bold indent-2 \
            bg-gray-100 dark:bg-gray-600 \
            placeholder:text-gray-500/25 dark:placeholder:text-white/25 \
            outline-primary caret-primary active:outline focus:outline", {
              "outline-danger outline": error,
            }
            )}
            placeholder="Search for any word…"
          />

          <button type="submit" className="absolute right-0 inset-y-0 p-6">
            <img alt="search" src="./images/icon-search.svg" />
          </button>
        </div>
      </form>

      {error && <p className="text-danger text-sm mt-2">{error}</p>}
    </>
  );
};
