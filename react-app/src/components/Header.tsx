import React from "react";
import { FontSelect } from "./FontSelect";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
  return (
    <header className="max-w-screen-md mx-auto pt-14 pb-12 flex justify-between">
      <img alt="logo" src={new URL("/images/logo.svg", import.meta.url).href} />

      <div className="flex">
        <FontSelect />

        <div className="h-full w-px bg-gray-200"></div>

        <DarkModeSwitch />
      </div>
    </header>
  );
};
