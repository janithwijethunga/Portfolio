import { cn } from "../../utils/classNames";

const SectionHeader = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("space-y-3", alignment)}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-4xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={cn("text-base text-neutral-600 dark:text-neutral-300 md:text-lg", align === "center" && "mx-auto max-w-2xl")}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
