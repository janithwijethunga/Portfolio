import { cn } from "../../utils/classNames";

const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={cn(
        "w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
