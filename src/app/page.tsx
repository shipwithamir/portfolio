import GitHubCalendar from "./components/github-calendar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="px-4">
      <Hero />
      <GitHubCalendar />
    </div>
  );
}
