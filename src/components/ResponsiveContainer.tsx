import React, { ReactNode } from "react";
import "./ResponsiveContainer.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ResponsiveContainer({ children, className = "" }: Props) {
  return <div className={`container ${className}`}>{children}</div>;
}
