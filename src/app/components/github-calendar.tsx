"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar, Activity } from "react-activity-calendar";
import Tooltip from "./ui/tooltip";
import { useTheme } from "next-themes";

interface GitHubCalendarProps {
  username?: string;
}

const themeColors = {
  light: [
    "var(--bg-muted)",
    "color-mix(in oklch, var(--accent) 35%, var(--bg-muted))",
    "color-mix(in oklch, var(--accent) 50%, var(--bg-muted))",
    "color-mix(in oklch, var(--accent) 75%, var(--bg-muted))",
    "var(--accent)",
  ],
  dark: [
    "var(--bg-muted)",
    "color-mix(in oklch, var(--accent) 35%, var(--bg-muted))",
    "color-mix(in oklch, var(--accent) 50%, var(--bg-muted))",
    "color-mix(in oklch, var(--accent) 75%, var(--bg-muted))",
    "var(--accent)",
  ],
};

export default function GitHubCalendar({
  username = "shipwithamir",
}: GitHubCalendarProps) {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );

        if (res.ok) {
          const json = await res.json();
          setData(json.contributions || []);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]);

  const formatDate = (date: string) => {
    return new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(" ", ", ")
      .toLowerCase();
  };

  const currentTheme = resolvedTheme || theme;

  if (!mounted) return <div className="h-39" />;

  return (
    <div className="flex-center mt-12 sm:16 flex-col rounded-2xl border-none overflow-y-hidden overflow-x-hidden">
      <ActivityCalendar
        className="text-fg-muted"
        data={data}
        loading={isLoading}
        colorScheme={currentTheme === "dark" ? "dark" : "light"}
        theme={themeColors}
        labels={{
          totalCount: "{{count}} contributions in the last year",
          legend: {
            less: "",
            more: "",
          },
        }}
        blockSize={11}
        blockMargin={3}
        blockRadius={3}
        fontSize={12}
        renderBlock={(block, activity) => (
          <Tooltip
            key={activity.date}
            content={`${activity.count} contributions on ${formatDate(activity.date)}`}
          >
            {block}
          </Tooltip>
        )}
      />
    </div>
  );
}
