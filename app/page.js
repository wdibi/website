import content from '@/data/content';
import Section from '@/components/Section';

export default function Home() {
  return (
    <div className="container">
      <div className="theme" />
      <header className="header">
        <h1>Will DiBiagio</h1>
      </header>

      <main className="wrapper">
        {content.map((section, i) => (
          <Section {...section} key={String(i)} />
        ))}
      </main>
      <footer className="footer">That is all.</footer>
    </div>
  );
}
