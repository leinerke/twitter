import React from 'react';
import { Button, ButtonModifier } from '../../01-atoms/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Divider } from '../../01-atoms/divider/Divider';
import { Paragraph, ParagraphSize } from '../../01-atoms/paragraph/Paragraph';
import { Link, LinkColor } from '../../01-atoms/Link/Link';

export const SignUp = () => {
  return (
    <div className="flex flex-col w-full max-w-[18rem]">
      <div className="pb-3">
        <Button modifier={ButtonModifier.secondary}>
          <FontAwesomeIcon icon={faGoogle} className="pr-2" />
          Sign up with Google
        </Button>
      </div>
      <div>
        <Button modifier={ButtonModifier.secondary}>
          <FontAwesomeIcon icon={faApple} className="pr-2" />
          Sign up with Apple
        </Button>
      </div>
      <div className="py-1">
        <Divider>
          or
        </Divider>
      </div>
      <div className="pb-1">
        <Button modifier={ButtonModifier.primary}>
          Sign up with phone or email
        </Button>
      </div>
      <div>
        <Paragraph size={ParagraphSize.xs}>
          {`By signing up, you agree to the `}
          <Link
            href="https://twitter.com/tos"
            color={LinkColor.primary}
            linkProps={{ target: '_blank' }}
          >
            Terms of Service
          </Link>
          {` and `}
          <Link
            href="https://twitter.com/privacy"
            color={LinkColor.primary}
            linkProps={{ target: '_blank' }}
          >
            Privacy Policy
          </Link>
          {`, including `}
          <Link
            href="https://help.twitter.com/rules-and-policies/twitter-cookies"
            color={LinkColor.primary}
            linkProps={{ target: '_blank' }}
          >
            Cookie Use
          </Link>
          .
        </Paragraph>
      </div>
    </div>
  );
};
