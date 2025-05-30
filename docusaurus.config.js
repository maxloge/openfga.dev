// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
import * as path from "path";

const isDev = process.env.NODE_ENV === 'development';

const baseUrl = process.env.BASE_URL ?? '/';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenFGA',
  tagline: 'Relationship-based access control made fast, scalable, and easy to use.',
  url: 'https://openfga.dev',
  baseUrl: baseUrl,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/openfga-icon.svg',
  organizationName: 'openfga',
  projectName: 'openfga.dev',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  deploymentBranch: 'gh-pages',
  customFields: {
    resources: [
      {
        text: 'Zanzibar Academy →',
        href: 'https://zanzibar.academy/',
        icon: 'ZanzibarIcon',
      },
      {
        text: 'Auth0 FGA Playground →',
        href: 'https://play.fga.dev/',
        icon: 'ModelIcon',
      },
      {
        text: 'Podcast - Authorization in Software →',
        href: 'https://authorizationinsoftware.auth0.com/',
        icon: 'PodcastIcon',
      },
    ],
    feedback: {
      defaultTitle: 'Have Feedback?',
      defaultText: 'Join us on the CNCF Slack OpenFGA channel if you have any questions or suggestions.',
      defaultButtonText: 'Join Slack',
      defaultLink: 'https://openfga.dev/community',
    },
    // location of the swagger file
    apiDocsBasePath: process.env.API_DOCS_PATH
      ? process.env.API_DOCS_PATH
      : 'https://raw.githubusercontent.com/openfga/api/main/docs/openapiv2/apidocs.swagger.json',

    // Customization for product information
    /* eslint-disable max-len */
    description: `OpenFGA is an open source Fine-Grained Authorization solution based on Google's Zanzibar.`,
    productName: `OpenFGA`,
    // link to product description section (relative to baseURL)
    introLink: `docs/authorization-concepts`,
    productDescriptionSection: `#what-is-openfga`,
    productDescriptionLink: `docs/fga`,
    // link to the concept page (relative to baseURL)
    conceptLink: `docs/concepts`,
    longProductName: `OpenFGA`,
    landingPageTitle: 'Fine-Grained Authorization',

    // define playgroundName and playgroundURL if you want to show your examples through playground
    //playgroundName: '',
    //playgroundURL: '',

    languageMapping: {
      js: {
        importStatement: `const { OpenFgaClient } = require('@openfga/sdk');`,
        apiName: `OpenFgaClient`,
        setupNote: `// ApiTokenIssuer, ApiAudience, ClientId and ClientSecret are optional.\n`,
      },
      go: {
        importStatement: `. "github.com/openfga/go-sdk"
    . "github.com/openfga/go-sdk/client"`,
        apiName: `OpenFgaClient`,
        setupNote: `// ApiTokenIssuer, ApiAudience, ClientId and ClientSecret are optional.\n`,
      },
      dotnet: {
        importStatement: `using OpenFga.Sdk.Client;
using OpenFga.Sdk.Client.Model;
using OpenFga.Sdk.Model;`,
        apiName: `OpenFgaClient`,
        setupNote: `// ApiTokenIssuer, ApiAudience, ClientId and ClientSecret are optional.\n`,
      },
      python: {
        importStatement: `import asyncio
import os
import json
from openfga_sdk.client import ClientConfiguration, OpenFgaClient`,
        apiName: `OpenFgaClient`,
        setupNote: `# ApiTokenIssuer, ApiAudience, ClientId and ClientSecret are optional.\n`,
      },
      java: {
        importStatement: `import dev.openfga.sdk.api.client.OpenFgaClient;
import dev.openfga.sdk.api.configuration.ClientConfiguration;`,
        apiName: `OpenFgaClient`,
        setupNote: `// ApiTokenIssuer, ApiAudience, ClientId and ClientSecret are optional.\n`,
      }
    },
    contentSecurityPolicy: `default-src 'none';
      base-uri 'self';
      block-all-mixed-content;
      worker-src 'self';
      child-src www.youtube-nocookie.com;
      prefetch-src 'self';
      connect-src 'self' https://raw.githubusercontent.com https://s3.amazonaws.com https://cdn.cookielaw.org https://privacyportal.onetrust.com https://heapanalytics.com https://js.hs-scripts.com https://api.github.com https://js.hscollectedforms.net https://js.hs-analytics.net https://js.hs-banner.com https://forms.hscollectedforms.net ;
      font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
      form-action 'none';
      frame-src www.youtube-nocookie.com;
      img-src 'self' data: https://pbs.twimg.com https://docs.github.com https://heapanalytics.com https://forms.hsforms.com https://track.hubspot.com ;
      media-src 'self';
      object-src 'none';
      script-src 'self' ${
        process.env.NODE_ENV === 'development' ? `'unsafe-eval'` : ``
      } 'unsafe-inline' https://cdn.cookielaw.org https://geolocation.onetrust.com https://cdn.heapanalytics.com https://js.hs-scripts.com https://api.github.com https://js.hscollectedforms.net https://js.hs-analytics.net https://js.hs-banner.com;
      style-src 'unsafe-inline' 'self' https://fonts.googleapis.com;`,
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        docsDir: 'docs/content',
        docsRouteBasePath: '/',
      },
    ],
  ],
  plugins: [
    require.resolve('./webpack-overrides.docusaurus-plugin'),
    [
      '@docusaurus/plugin-client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        fromExtensions: ['html'],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createRedirects: (path) => {},
        redirects: [
          {
            to: '/api/service',
            from: ['/api'],
          },
          {
            to: '/docs/community',
            from: '/community',
          },
          {
            to: '/docs/fga',
            from: '/docs',
          }
        ],
      }),
    ],
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@components': path.resolve(__dirname, './src/components'),
          '@features': path.resolve(__dirname, './src/features'),
          '@static': path.resolve(__dirname, './static'),
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: isDev,
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          routeBasePath: '/docs',
          exclude: ['**/README.md'],
          showLastUpdateAuthor: false,
          editUrl: 'https://github.com/openfga/openfga.dev/edit/main/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: [path.resolve('static/css/openfga.css'), path.resolve('src/css/custom.css')],
        },
      }),
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&display=swap',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'OpenFGA, open source, fine-grained-authorization, fine grained authorization, Zanzibar',
        },
        {
          property: 'og:image',
          content: 'https://openfga.dev/img/og-rich-embed.png',
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        // style: "primary",
        // title: "OpenFGA",
        logo: {
          alt: 'OpenFGA',
          src: 'img/openfga_logo.svg',
          href: '/',
          target: '_self',
          // height: "5rem",
        },
        items: [
          {
            to: '/',
            label: 'Home',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          { to: '/api/service', label: 'API', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: 'https://github.com/openfga/openfga',
            position: 'right',
            label: 'GitHub',
            className: 'header-social header-github-link',
            'aria-label': 'OpenFGA on GitHub',
          },
          {
            to: 'https://twitter.com/OpenFGA',
            label: 'Twitter',
            position: 'right',
            className: 'header-social header-twitter-link',
            'aria-label': 'OpenFGA on Twitter',
          },
          {
            to: 'https://openfga.dev/community',
            label: 'CNCF Slack',
            position: 'right',
            className: 'header-social header-slack-link',
            'aria-label': 'OpenFGA on Slack',
          },
        ],
      },
      footer: {
        links: [
          {
            to: 'https://twitter.com/OpenFGA',
            className: 'header-social header-twitter-link',
            'aria-label': 'OpenFGA on Twitter',
            label: 'Twitter',
          },
          {
            to: 'https://openfga.dev/community',
            className: 'header-social header-slack-link',
            'aria-label': 'OpenFGA on Slack',
            label: 'CNCF Slack',
          },
          {
            to: 'https://github.com/openfga',
            className: 'header-social header-github-link',
            'aria-label': 'OpenFGA on GitHub',
            label: 'GitHub',
          },
          {
            to: 'https://mastodon.social/@openfga',
            rel: "me noopener noreferrer",
            className: 'header-social header-mastodon-link',
            'aria-label': 'OpenFGA on Mastodon',
            label: 'Mastodon',
          },
        ],
        copyright: `<div><a href="https://www.linuxfoundation.org/trademark-usage"><img src="/img/cncf-icon-white.svg" alt="CNCF" style="vertical-align:middle; margin-right:8px;" /></a> &copy; ${new Date().getFullYear()} <a href="https://www.linuxfoundation.org/" target="_blank">The Linux Foundation</a>®. All rights reserved. <span class="display-on-desktop">For a list of trademarks of The Linux Foundation, see our <a href="https://www.linuxfoundation.org/trademark-usage" class="light-text" target="blank">Trademark Usage page</a>.</span></div>`,
      },

      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['bash', 'csharp', 'json', 'java', 'clike'],
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
};

if (process.env.HUBSPOT_TRACKING_ID) {
  config.scripts = [
    {
      src: `https://js.hs-scripts.com/${process.env.HUBSPOT_TRACKING_ID}.js`,
      type: "text/javascript",
      charset: "UTF-8",
      id: "hs-script-loader",
      async: true,
      defer: true,
    },
  ];
}

module.exports = config;
