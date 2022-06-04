import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

export const Divider = ({
  children,
}: ParagraphProps) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-divider-light dark:border-divider-dark"></div>
      <span className="flex-shrink mx-4">{children}</span>
      <div className="flex-grow border-t border-divider-light dark:border-divider-dark"></div>
    </div>
  );
};
