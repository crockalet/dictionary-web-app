import { createContext, useEffect, useState, useContext } from "react";

const DarkModeContext = createContext<{
  isDark: boolean;
  changeDarkMode: (value: boolean) => void;
}>({
  isDark: false,
  changeDarkMode: () => {},
});

export const DarkModeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDarkMode") == "true"
  );

  const changeDarkMode = (value: boolean) => {
    localStorage.setItem("isDarkMode", `${value}`);

    setIsDark(value);
  };

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, changeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
