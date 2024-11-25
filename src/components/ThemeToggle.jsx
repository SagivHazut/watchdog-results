import React from "react";
import { Switch } from "@mui/material";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import "../style/ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='theme-toggle'>
      <Switch
        checked={theme === "light"}
        onChange={toggleTheme}
        color='default'
        inputProps={{ "aria-label": "theme toggle" }}
        icon={<FaMoon />}
        checkedIcon={<FaSun />}
      />
    </div>
  );
};

export default ThemeToggle;
