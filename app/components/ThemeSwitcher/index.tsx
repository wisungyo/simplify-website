"use client";

import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import IconToggle from "@/app/components/IconToggle";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="lemonade"
          onClick={handleDark}
        />
        <IconToggle
          name={"love"}
          IconActive={IoMoonOutline}
          IconInactive={IoSunnyOutline}
          color="neutral"
          isActive={isDark}
        />
      </label>
    </>
  );
};

export default ThemeSwitcher;
