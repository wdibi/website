import Head from 'next/head';
import Section from '../components/Section';

const content = [
  {
    title: 'education',
    items: [
      {
        text: 'Studying Computer Science at',
        linkText: 'LMU',
        href: 'https://lmu.edu',
      },
    ],
  },
  { title: 'work', items: [] },
  { title: 'projects', items: [] },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Will DiBiagio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Cousine:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div className="theme" />
      <header className="header">
        <h1>Will DiBiagio</h1>
      </header>

      <main className="wrapper">
        {content.map((section) => (
          <Section {...section} />
        ))}
      </main>
      <footer className="footer">That is all.</footer>
    </div>
  );
}
