import { cn } from "../../utils/classNames";

const Container = ({ children, className = "" }) => {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
};

export default Container;
