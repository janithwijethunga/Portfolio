import { useTheme } from "../../hooks/useTheme.jsx";

const themes = ["light", "dark", "system"];

const icons = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleToggle = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-200 dark:hover:text-neutral-100"
      aria-label={`Toggle theme (current: ${theme})`}
    >
      <span className="text-[11px] uppercase tracking-widest">{icons[theme]}</span>
      <span className="h-2 w-2 rounded-full bg-primary-500" aria-hidden />
      <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{resolvedTheme}</span>
    </button>
  );
};

export default ThemeToggle;
