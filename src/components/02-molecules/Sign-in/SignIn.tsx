import React from 'react';
import { Paragraph, ParagraphSize } from '../../01-atoms/paragraph/Paragraph';
import { Button, ButtonModifier } from '../../01-atoms/button/Button';

export const SignIn = () => (
  <div className="w-full max-w-[18rem]">
    <div className="pb-3">
      <Paragraph size={ParagraphSize.base}>
        Already have an account?
      </Paragraph>
    </div>
    <div>
      <Button modifier={ButtonModifier.transparent}>
        Sign in
      </Button>
    </div>
  </div>
);
