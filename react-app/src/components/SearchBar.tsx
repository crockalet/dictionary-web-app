import React, { useMemo } from "react";
import debounce from "lodash/debounce";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  debounceWait?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  type,
  debounceWait = 200,
  className,
  ...rest
}) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useMemo(() => {
      return debounce((e) => {
        onChange?.(e);
      }, debounceWait);
    }, [onChange, debounceWait]);

  return (
    <input
      type="search"
      onChange={changeHandler}
      className={`w-full text-xl py-5 px-6 rounded-2xl bg-gray-100 dark:bg-gray-600 ${className}`}
      {...rest}
    />
  );
};
