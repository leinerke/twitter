import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Illustration = () => (
  <div className="flex items-center justify-center w-full h-full bg-login bg-no-repeat bg-cover bg-center p-8">
    <FontAwesomeIcon icon={faTwitter} className="block max-w-full max-h-96 h-2/4 text-white" />
  </div>
);
