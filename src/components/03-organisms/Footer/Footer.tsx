import React from 'react';
import { List, ListStyle } from '../../01-atoms/list/List';
import {
  Paragraph,
  ParagraphColor,
  ParagraphSize,
} from '../../01-atoms/paragraph/Paragraph';
import { Link, LinkColor } from '../../01-atoms/Link/Link';

export const Footer = () => {
  const items = [
    { text: 'About', href: 'https://about.twitter.com/' },
    { text: 'Help Center', href: 'https://help.twitter.com/' },
    { text: 'Terms of Service', href: 'https://twitter.com/tos' },
    { text: 'Privacy Policy', href: 'https://twitter.com/privacy' },
    { text: 'Cookie Policy', href: 'https://support.twitter.com/articles/20170514' },
    { text: 'Accessibility', href: 'https://help.twitter.com/resources/accessibility' },
    { text: 'Ads info', href: 'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo' },
    { text: 'Blog', href: 'https://blog.twitter.com/' },
    { text: 'Status', href: 'https://status.twitterstat.us/' },
    { text: 'Careers', href: 'https://careers.twitter.com/' },
    { text: 'Brand Resources', href: 'https://about.twitter.com/press/brand-assets' },
    { text: 'Advertising', href: 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise' },
    { text: 'Marketing', href: 'https://marketing.twitter.com/' },
    { text: 'Twitter for Business', href: 'https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness' },
    { text: 'Developers', href: 'https://developer.twitter.com/' },
    { text: 'Directory', href: 'https://twitter.com/i/directory/profiles' },
    { text: 'Settings', href: 'https://twitter.com/settings' },
    { text: '© 2022 Twitter, Inc.' },
  ];

  return (
    <footer className="p-4">
      <List style={ListStyle.horizontal}>
        {items.map((item, index) => (
          <li key={`footer-item-${index}`}>
            <Paragraph size={ParagraphSize.xs} color={ParagraphColor.footer}>
              {!item.href ? (
                <>
                  {item.text}
                </>
              ) : (
                <Link color={LinkColor.footer} href={item.href} linkProps={{target: '_blank'}}>
                  {item.text}
                </Link>
              )}
            </Paragraph>
          </li>
        ))}
      </List>
    </footer>
  );
};
