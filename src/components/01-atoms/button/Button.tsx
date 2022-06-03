import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  modifier?: ButtonModifier;
  onClick?: () => void;
}

enum ButtonModifier {
  Primary = 'primary',
  Secondary = 'secondary',
  Transparent = 'transparent',
}

export const Button = ({
  children,
  modifier,
  onClick,
}: ButtonProps) => {
  let bgColor;
  let bgColorHover;
  let borderColor;
  let textColor;

  switch (modifier) {
    case ButtonModifier.Secondary:
      bgColor = 'bg-white';
      bgColorHover = 'hover:bg-white-h';
      borderColor = 'border-border-white';
      textColor = 'text-black';
      break;
    case ButtonModifier.Transparent:
      bgColor = 'bg-transparent';
      bgColorHover = 'hover:bg-transparent-h';
      borderColor = 'border-border-transparent';
      textColor = 'text-primary';
      break;
    case ButtonModifier.Primary:
    default:
      bgColor = 'bg-primary';
      bgColorHover = 'hover:bg-primary-h';
      borderColor = 'border-transparent';
      textColor = 'text-black';
      break;
  }

  const className = [
    'w-72',
    'p-2',
    'rounded-full',
    'text-sm',
    'font-bold',
    'transition-colors',
    'border',
    textColor,
    borderColor,
    bgColor,
    bgColorHover,
  ];

  return (
    <button className={className.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};
