import { cn } from "../../utils/classNames";

const Card = ({ children, className = "" }) => {
  return (
    <div className={cn("rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-soft backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70", className)}>
      {children}
    </div>
  );
};

export default Card;
