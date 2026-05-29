import { cn } from "../../utils/classNames";

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

const variants = {
  primary: "bg-primary-500 text-white shadow-glow hover:bg-primary-600",
  secondary: "border border-neutral-700 bg-neutral-900 text-neutral-100 hover:border-neutral-600 hover:bg-neutral-800",
  ghost: "text-neutral-200 hover:text-neutral-100 hover:bg-neutral-800",
};

const Button = ({ as: Comp = "button", variant = "primary", className = "", ...props }) => {
  return <Comp className={cn(baseStyles, variants[variant], className)} {...props} />;
};

export default Button;
