import React from 'react';
import {
  TemplateFooter,
} from '../../04-templates/Template-footer/TemplateFooter';
import { JoinTwitter } from '../../03-organisms/Join-twitter/JoinTwitter';
import { Illustration } from '../../02-molecules/Illustration/Illustration';

export const Login = () => {
  return (
    <TemplateFooter>
      <div className="flex flex-col lg:flex-row-reverse h-full lg:items-center">
        <div className="w-full min-w-[45vw] max-w-[600px] p-4 mx-auto">
          <JoinTwitter />
        </div>
        <div className="flex-1 h-full w-full">
          <Illustration />
        </div>
      </div>
    </TemplateFooter>
  );
};
