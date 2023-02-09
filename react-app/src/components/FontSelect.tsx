import React from "react";

export const FontSelect = () => {
  return (
    <select className="font-bold bg-white dark:bg-gray-700">
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="mono">Mono</option>
    </select>
  );
};
