/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lantern OS Wiki',
  tagline: 'All the resources pertaining to the LanternOS Project, including complete Documentation and Blog posts.',
  url: 'https://enygmator.github.io',
  baseUrl: '/LanternOS.Wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'enygmator', // Usually your GitHub org/user name.
  projectName: 'LanternOS.Wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Lantern OS Wiki',
      logo: {
        alt: 'Lantern OS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about-lantern-os',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/changelog', label: 'What\'s New', position: 'right'},
        {
          href: 'https://github.com/enygmator/LanternOS.WIKI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'About LanternOS',
              to: '/docs/about-lantern-os',
            },
          ],
        },
        {
          title: 'Enygmator (Tarun Aditya Thurlapati)',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/enygmator',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/enygmator',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub - LanternOS Project',
              to: 'https://github.com/enygmator/LanternOS',
            },
            {
              label: 'GitHub - LanternOS WIKI',
              href: 'https://github.com/enygmator/LanternOS.WIKI',
            },
            {
              label: 'OS Development WIKI (wiki.osdev.org)',
              href: 'https://wiki.osdev.org',
            },
            {
              label: 'BrokenThorn OS Development Tutorial',
              href: 'https://enygmator.github.io/BrokenThorn-OS-Dev-Series/_site/',
            }
          ],
        },
      ],
      copyright: `Open source (Apache 2.0) License. Built with Docusaurus v2.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/enygmator/LanternOS.WIKI/edit/docs/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/blog/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
