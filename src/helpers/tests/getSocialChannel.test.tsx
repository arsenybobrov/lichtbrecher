import React from 'react';
import 'jest-styled-components';
import getSocialChannel from '../getSocialChannel';
import Icon from '../../components/atoms/Icon/Icon';

describe('getSocialChannel', () => {
  it('renders twitter icon + link', () => {
    expect(
      getSocialChannel({
        text: 'Fresenius auf Twitter',
        url: 'https://twitter.com/Fresenius',
        target: 'NEW',
      })
    ).toStrictEqual(
      <a
        key="twitter"
        href="https://twitter.com/Fresenius"
        rel="noreferrer noopener"
        target="_blank"
        title="Fresenius auf Twitter"
      >
        <Icon icon="TWITTER" />
      </a>
    );
  });
  it('renders facebook icon + link', () => {
    expect(
      getSocialChannel({
        text: 'Fresenius auf Facebook',
        url: 'https://de-de.facebook.com/fresenius.group/',
        target: 'NEW',
      })
    ).toStrictEqual(
      <a
        key="facebook"
        href="https://de-de.facebook.com/fresenius.group/"
        rel="noreferrer noopener"
        target="_blank"
        title="Fresenius auf Facebook"
      >
        <Icon icon="FACEBOOK" />
      </a>
    );
  });
  it('renders xing icon + link', () => {
    expect(
      getSocialChannel({
        text: 'Fresenius auf Xing',
        url: 'https://www.xing.com/companies/freseniusgroup',
        target: 'NEW',
      })
    ).toStrictEqual(
      <a
        key="xing"
        href="https://www.xing.com/companies/freseniusgroup"
        rel="noreferrer noopener"
        target="_blank"
        title="Fresenius auf Xing"
      >
        <Icon icon="XING" />
      </a>
    );
  });
  it('renders linkedin icon + link', () => {
    expect(
      getSocialChannel({
        text: 'Fresenius auf LinkedIn',
        url: 'https://de.linkedin.com/company/fresenius-se',
        target: 'NEW',
      })
    ).toStrictEqual(
      <a
        key="linkedin"
        href="https://de.linkedin.com/company/fresenius-se"
        rel="noreferrer noopener"
        target="_blank"
        title="Fresenius auf LinkedIn"
      >
        <Icon icon="LINKEDIN" />
      </a>
    );
  });
  it('renders youtube icon + link', () => {
    expect(
      getSocialChannel({
        text: 'Unser YouTube-Kanal',
        url: 'https://www.youtube.com/user/freseniusmedicare',
        target: 'NEW',
      })
    ).toStrictEqual(
      <a
        key="youtube"
        href="https://www.youtube.com/user/freseniusmedicare"
        rel="noreferrer noopener"
        target="_blank"
        title="Unser YouTube-Kanal"
      >
        <Icon icon="YOUTUBE" />
      </a>
    );
  });
});
