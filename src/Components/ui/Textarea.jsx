import { cn } from "../../utils/classNames";

const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={cn(
        "w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
