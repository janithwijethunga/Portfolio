import React, { forwardRef } from "react";
import { cn } from "../../utils/classNames";

const Container = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div ref={ref} className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
});

Container.displayName = "Container";
export default Container;