import React, { FC } from 'react';
import { addParameters } from '@storybook/react';
import './styles.scss';
import theme from './theme';

import {
  Title,
  Primary,
  Props,
  Stories,
  types,
} from '@storybook/addon-docs/blocks';

import { DocsPage } from './blocks/DocsPage';
import { DocsContainer } from './blocks/DocsContainer';

//console.log(ccc);
/*
const githubPath = resultReadme
  ? resultReadme.replace('./src/', './').replace('README.md', '')
  : undefined;*/

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewMode: 'docs',
}); // or global addParameters
export const parameters = {
  controls: { expanded: true },
  docs: {
    theme: theme,
  },
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
      title: 'Documentation',
    },
    canvas: { title: 'Code', hidden: false },
  },
  options: {
    storySort: {
      order: [
        'Getting started',
        [
          'Intro',
          'Installing the Kit',
          'Using the Kit',
          'Recommended libraries',
          'Design resources',
          'Browser support',
          "What's new",
          'Support and Feedback',
          'Credits',
        ],
        'Documentation',
        'Templates',
        'Components',
      ],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ltr', title: 'left-to-right' },
        { value: 'rtl', title: 'right-to-left' },
      ],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const { locale, theme } = context.globals;
  document.body.classList.remove(
    `wfp--theme-${theme === 'light' ? 'dark' : 'light'}`
  );
  document.body.classList.add(`wfp--theme-${theme}`);
  return (
    <div
      className={`wfp--theme-${theme} wfp--theme-${locale}`}
      dir={locale === 'rtl' ? 'rtl' : null}>
      <Story {...context} />
    </div>
  );
};
export const decorators = [withThemeProvider];
