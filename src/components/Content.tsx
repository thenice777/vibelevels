import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <main className="flex-1 overflow-y-auto pt-20" style={{ minHeight: 0 }}>
      {children}
    </main>
  );
};
