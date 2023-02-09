import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export const DarkModeSwitch = () => {
  const { isDark, changeDarkMode } = useDarkMode();
  return (
    <label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => changeDarkMode(e.target.checked)}
      />
      <span></span>
    </label>
  );
};
