// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'identiGO',
  tagline: 'Biztonságos és egyszerű identitáskezelés',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://identigo.hu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'identigo', // Usually your GitHub org/user name.
  projectName: 'identigo-docosaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/identigo/identigo-docosaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/identigo/identigo-docosaurus/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    function akademiaDynamicRoutesPlugin() {
      return {
        name: 'akademia-dynamic-routes',
        async contentLoaded({actions}) {
          actions.addRoute({
            path: '/akademia/esemenyek/:slug',
            component: '@site/src/pages/akademia/esemenyek/[slug].js',
            exact: true,
          });
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'identiGO',
        logo: {
          alt: 'identiGO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Főoldal', position: 'left', activeBaseRegex: '^/$'},
          {
            label: 'Termék',
            to: '/akademia',
            position: 'left',
            className: 'navbar-mega',
            activeBaseRegex: '^/(rend|ebook|akademia(?:/.*)?)$',
            items: [
              {
                label: 'Hogyan rakok rendet',
                to: '/rend',
                className: 'mega-card-link',
              },
              {
                label: 'E-book',
                to: '/ebook',
                className: 'mega-card-link',
              },
              {
                label: 'Akadémia',
                to: '/akademia',
                className: 'mega-card-link',
                activeBaseRegex: '^/akademia/?$',
              },
              {
                label: 'Események',
                to: '/akademia/esemenyek',
                className: 'mega-card-link',
                activeBaseRegex: '^/akademia/esemenyek(?:/.*)?$',
              },
            ],
          },
          {
            label: 'Közösség és tartalom',
            position: 'left',
            className: 'navbar-mega',
            items: [
              {
                label: 'Közösség',
                to: '/kozosseg',
                className: 'mega-card-link',
              },
              {
                label: 'Blog',
                to: '/blog',
                className: 'mega-card-link',
              },
              /* {
                label: 'Zsuzsa partner oldal',
                to: '/zsuzsa',
                className: 'mega-card-link',
              }, */
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                label: 'Dokumentáció',
                className: 'mega-card-link',
              },
            ],
          },
          {
            href: 'https://github.com/identigo/identigo-docosaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigáció',
            items: [
              {
                label: 'Közösség',
                to: '/kozosseg',
              },
              {
                label: 'Rend oldal',
                to: '/rend',
              },
              {
                label: 'E-book',
                to: '/ebook',
              },
            ],
          },
          {
            title: 'Akadémia',
            items: [
              {
                label: 'Akadémia főoldal',
                to: '/akademia',
              },
              {
                label: 'Események',
                to: '/akademia/esemenyek',
              },
            ],
          },
          {
            title: 'Továbbiak',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/identigo/identigo-docosaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} identiGO. Készült Docusaurus segítségével.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
