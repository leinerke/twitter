import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  size: ParagraphSize;
  color?: ParagraphColor;
}

export enum ParagraphColor {
  footer = 'footer',
}

export enum ParagraphSize {
  xs = 'text-xs',
  small = 'text-sm',
  base = 'text-base',
}

export const Paragraph = ({
  children,
  size,
  color,
}: ParagraphProps) => {
  const fontWeight = size === ParagraphSize.base ? 'font-bold' : '';
  const className = [
    size,
    fontWeight,
  ];

  if (color === ParagraphColor.footer) {
    className.push('text-footer-link', 'dark:text-footer-link-dark');
  }

  return (
    <p className={className.join(' ')}>
      {children}
    </p>
  );
};
