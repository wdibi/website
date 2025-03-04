interface SectionItemProps {
  text: string;
  linkText: string;
  href: string;
}

interface SectionProps {
  title: string;
  items: SectionItemProps[];
}

function SectionItem({text, linkText, href}: SectionItemProps) {
  return (
    <li>
      {text}{' '}
      <mark>
        <a href={href}>{linkText}</a>
      </mark>
    </li>
  );
}

export default function Section({title, items}: SectionProps) {
  return (
    <details>
      <summary>
        <h2 className="as-text">
          <i>_{title.toUpperCase()}</i>
        </h2>
      </summary>
      <ul className="list list-items">
        {items.map((item, i) => (
          <SectionItem {...item} key={String(i)} />
        ))}
      </ul>
    </details>
  );
}
