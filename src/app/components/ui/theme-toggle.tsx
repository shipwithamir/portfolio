"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Button from "./button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative p-2"
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
