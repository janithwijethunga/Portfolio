import { useTheme } from "../../hooks/useTheme.jsx";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-700 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200 dark:focus-visible:ring-offset-neutral-900"
    >
      {isDark ? (
        <IoSunnyOutline />
      ) : (
       <FaMoon />
      )}
    </button>
  );
};

export default ThemeToggle;
