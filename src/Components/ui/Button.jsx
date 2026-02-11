import { cn } from "../../utils/classNames";

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-900";

const variants = {
  primary: "bg-primary-500 text-white shadow-glow hover:bg-primary-600",
  secondary: "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800",
  ghost: "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800",
};

const Button = ({ as: Comp = "button", variant = "primary", className = "", ...props }) => {
  return <Comp className={cn(baseStyles, variants[variant], className)} {...props} />;
};

export default Button;
