import React from 'react';
import { SignUp } from '../../02-molecules/Sign-up/SignUp';
import { Heading, LevelHeading } from '../../01-atoms/heading/Heading';
import { SignIn } from '../../02-molecules/Sign-in/SignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const JoinTwitter = () => (
  <div className="p-4">
    <div className="pb-12">
      <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
    </div>
    <div className="pb-12">
      <Heading level={LevelHeading.h1}>
        Happening now
      </Heading>
    </div>
    <div className="pb-6">
      <Heading level={LevelHeading.h3}>
        Join Twitter today.
      </Heading>
    </div>
    <div className="pb-10">
      <SignUp />
    </div>
    <div>
      <SignIn />
    </div>
  </div>
);
