import { useDarkMode } from "../contexts/DarkModeContext";

export const DarkModeSwitch = () => {
  const { isDark, changeDarkMode } = useDarkMode();
  return (
    <label className="relative inline-flex items-center cursor-pointer ml-4">
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => changeDarkMode(e.target.checked)}
        className="sr-only peer"
      />
      <div className="relative w-9 h-5 bg-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ap"></div>
      <span className="ml-3">
        <svg className="text-gray-300 dark:text-primary w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
          <path fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" />
        </svg>
      </span>
    </label>
  );
};
