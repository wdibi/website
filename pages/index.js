import Head from 'next/head';
import Section from '../components/Section';
import content from '../data/content';

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
