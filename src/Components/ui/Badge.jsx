import { cn } from "../../utils/classNames";

const Badge = ({ children, className = "" }) => {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-200", className)}>
      {children}
    </span>
  );
};

export default Badge;
