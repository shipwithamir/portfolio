import ThemeToggle from "./ui/theme-toggle";

function Header() {
  return (
    <header className="border-border sticky top-0 z-50 flex h-16 items-center justify-between border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-240 justify-between px-4">
        <h2 className="text-3xl font-bold">Amir.</h2>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
