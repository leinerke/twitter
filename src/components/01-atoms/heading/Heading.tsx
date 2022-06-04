import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: LevelHeading;
}

export enum LevelHeading {
  h1 = 1,
  h2 = 2,
  h3 = 3,
  h4 = 4,
  h5 = 5,
  h6 = 6,
}

export const Heading = ({
  children,
  level,
}: HeadingProps) => {
  const Tag = `h${level}`;
  let fontSize;

  switch (level) {
    case LevelHeading.h1:
      fontSize = 'text-6xl';
      break;
    case LevelHeading.h2:
      fontSize = 'text-5xl';
      break;
    case LevelHeading.h3:
      fontSize = 'text-4xl';
      break;
    case LevelHeading.h4:
      fontSize = 'text-3xl';
      break;
    case LevelHeading.h5:
      fontSize = 'text-2xl';
      break;
    case LevelHeading.h6:
    default:
      fontSize = 'text-xl';
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
