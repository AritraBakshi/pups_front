import React from "react";

type SeparatorProps = {
  variant?: "default" | "gradient";
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
};

export default function Separator({
  variant = "default",
  orientation = "horizontal",
  className = "",
  style = {},
}: SeparatorProps) {
  if (orientation === "horizontal") {
    if (variant === "gradient") {
      return (
        <div 
          className={`h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 ${className}`}
          style={style}
        />
      );
    } else {
      return (
        <div 
          className={`h-px w-full bg-gray-300 dark:bg-gray-600 ${className}`}
          style={style}
        />
      );
    }
  } else {
    // vertical
    if (variant === "gradient") {
      return (
        <div 
          className={`w-0.5 self-stretch bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-gray-500/50 ${className}`}
          style={style}
        />
      );
    } else {
      return (
        <div 
          className={`w-0.5 self-stretch bg-white/30 dark:bg-gray-500/50 ${className}`}
          style={style}
        />
      );
    }
  }
}
