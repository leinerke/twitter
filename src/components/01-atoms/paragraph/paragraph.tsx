import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  size: ParagraphSize;
}

export enum ParagraphSize {
  small = 'text-xs',
  base = 'text-base',
}

export const Paragraph = ({
  children,
  size,
}: ParagraphProps) => {
  const fontWeight = size === ParagraphSize.base ? 'font-bold' : '';
  const className = [
    size,
    fontWeight,
  ];
  return (
    <p className={className.join(' ')}>
      {children}
    </p>
  );
};
