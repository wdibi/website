interface ContentItem {
  text: string;
  linkText: string;
  href: string;
}

interface ContentSection {
  title: string;
  items: ContentItem[];
}

const content: ContentSection[] = [
  {
    title: 'about',
    items: [
      {
        text: 'Computer Science at',
        linkText: 'LMU',
        href: 'https://lmu.edu',
      },
    ],
  },
  {
    title: 'projects',
    items: [
      {
        text: 'Pixel Menu, contactless mobile menus',
        linkText: 'Website',
        href: 'https://a.pixel.menu',
      },
      {
        text: 'Pivot, a new spin on programming',
        linkText: 'GitHub',
        href: 'https://github.com/wdibi/Pivot',
      },
    ],
  },
];

export default content;
