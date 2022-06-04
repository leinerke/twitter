import React from 'react';
import { SignUp } from '../02-molecules/sign-up/SignUp';
import { Heading, LevelHeading } from '../01-atoms/heading/Heading';

export const JoinTwitter = () => (
  <React.Fragment>
    <div className="pb-6">
      <Heading level={LevelHeading.h3}>
        Join Twitter today.
      </Heading>
    </div>
    <SignUp />
  </React.Fragment>
);
