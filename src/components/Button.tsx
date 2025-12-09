import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  return (
    <button className={`ui-btn ui-btn--${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
}
