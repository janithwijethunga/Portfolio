import { cn } from "../../utils/classNames";

const Card = ({ children, className = "" }) => {
  return (
    <div className={cn("rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-soft backdrop-blur-sm", className)}>
      {children}
    </div>
  );
};

export default Card;
