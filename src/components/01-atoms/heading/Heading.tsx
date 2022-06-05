import React from 'react';

interface HeadingProps {
  level: LevelHeading;
  children: React.ReactNode;
}

export enum LevelHeading {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export const Heading: React.FC<HeadingProps> = ({
  level: Tag,
  children,
}: HeadingProps) => {
  let fontSize;

  switch (Tag) {
    case LevelHeading.h1:
      fontSize = 'text-4xl sm:text-6xl';
      break;
    case LevelHeading.h2:
      fontSize = 'text-3xl sm:text-5xl';
      break;
    case LevelHeading.h3:
      fontSize = 'text-2xl sm:text-4xl';
      break;
    case LevelHeading.h4:
      fontSize = 'text-xl sm:text-3xl';
      break;
    case LevelHeading.h5:
      fontSize = 'text-lg sm:text-2xl';
      break;
    case LevelHeading.h6:
    default:
      fontSize = 'text-base sm:text-xl';
  }

  const className = [
    'font-TwitterChirpExtendedHeavy',
    'font-bold',
    'tracking-tight',
    fontSize,
  ];

  return (
    <Tag
      className={className.join(' ')}
    >
      {children}
    </Tag>
  );
};
