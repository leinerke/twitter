import React from 'react';
import { Footer } from '../../03-organisms/Footer/Footer';

interface TemplateFooterProps {
  children: React.ReactNode;
}

export const TemplateFooter = ({ children }: TemplateFooterProps) => (
  <div className="flex height-screen flex-col">
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);
