import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["selectedTheme"]);

  useEffect(() => {
    if (cookies !== undefined) {
      loadPreferredTheme(cookies.selectedTheme);
    }
  }, []);

  const loadPreferredTheme = selectedTheme => {
    if (selectedTheme !== undefined) {
      changeTheme(selectedTheme);
    }
  };

  const changeTheme = selectedTheme => {
    addTransition();
    document.documentElement.setAttribute("data-theme", selectedTheme);
    setCurrentTheme(selectedTheme);
    setCookie("selectedTheme", selectedTheme, {
      path: "/",
      expires: new Date("2099-01-31")
    });
  };

  const onChangeTheme = () => {
    if (currentTheme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  const addTransition = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(
      () => document.documentElement.classList.remove("transition"),
      100
    );
  };

  return (
    <div>
      <button className="theme-selector-control" onClick={onChangeTheme}>
        <i
          className={
            currentTheme === "light"
              ? "theme-selector-icon fas fa-moon"
              : "theme-selector-icon fas fa-sun"
          }
        />{" "}
        <span className="theme-selector-text">
          change theme to {currentTheme === "light" ? "dark" : "light"}.
        </span>
      </button>
    </div>
  );
};

export default ThemeSelector;
