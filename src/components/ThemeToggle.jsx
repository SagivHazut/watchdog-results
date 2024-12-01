import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className='w-16 h-8 bg-gray-200 dark:bg-gray-800 dark:text-black rounded-full flex items-center p-1 shadow-md transition-all'
      onClick={toggleTheme}
      role='button'
      aria-label='Toggle Theme'
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform transform ${
          theme === "dark"
            ? "translate-x-0 bg-blue-100"
            : "translate-x-8 bg-blue-100"
        }`}
      >
        {theme === "dark" ? <IoMoonOutline size={17} /> : <CiLight size={17} />}
      </div>
    </div>
  );
};

export default ThemeToggle;
