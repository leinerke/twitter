import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: levelHeading;
}

enum levelHeading {
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
    case levelHeading.h1:
      fontSize = 'text-6xl';
      break;
    case levelHeading.h2:
      fontSize = 'text-5xl';
      break;
    case levelHeading.h3:
      fontSize = 'text-4xl';
      break;
    case levelHeading.h4:
      fontSize = 'text-3xl';
      break;
    case levelHeading.h5:
      fontSize = 'text-2xl';
      break;
    case levelHeading.h6:
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
