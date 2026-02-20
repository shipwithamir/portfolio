"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Button from "./ui/button";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(savedTheme ?? systemTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null; // prevents hydration issues

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-2"
    >
      <Sun
        className={`h-5 w-5 transition-all hover:animate-spin ${
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          isDark ? "scale-100 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
    </Button>
  );
}
