import React, { useEffect, useState } from "react";
import ToggleComponent from "./ToggleComponent";

const DarkMode = ({ className }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const preferredMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    setDarkMode(preferredMode);
    document.body.classList.toggle('light', preferredMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
  };

  return (
    <div className={className}>
      <ToggleComponent DarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default DarkMode;
