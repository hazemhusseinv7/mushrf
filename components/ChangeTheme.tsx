"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Button } from "@heroui/react";

import { MdDarkMode } from "react-icons/md";
import { RiSunCloudyFill } from "react-icons/ri";

const ChangeTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="min-w-0 bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      onPress={toggleTheme}
      aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <RiSunCloudyFill className="size-4" />
      ) : (
        <MdDarkMode className="size-4 text-zinc-900" />
      )}
    </Button>
  );
};

export default ChangeTheme;
