import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  props?: unknown;
  color: LinkColor;
}

export enum LinkColor {
  primary = 'primary',
  footer = 'footer',
}

export const Link = ({ children, href, color, props }: LinkProps) => {
  let textColor: string[] = [];

  switch (color) {
    case LinkColor.primary:
      textColor = ['text-primary'];
      break;
    case LinkColor.footer:
      textColor = ['text-footer-link', 'dark:text-footer-link-dark'];
      break;
  }


  const className = [
    ...textColor,
    'hover:underline',
  ];

  return (
    <NextLink href={href} {...props}>
      <a className={className.join(' ')}>{children}</a>
    </NextLink>
  );
};
