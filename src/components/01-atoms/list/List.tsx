import React from 'react';

interface ListProps {
  children: React.ReactNode;
  style: ListStyle;
}

export enum ListStyle {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export const List = ({ children, style }: ListProps) => {
  const className: string[] = [];

  switch (style) {
    case ListStyle.horizontal:
      className.push('flex', 'gap-3', 'flex-wrap');
      break;
  }

  return (
    <ul className={className.join(' ')}>
      {children}
    </ul>
  );
};
