function SectionItem({text, linkText, href}) {
  return (
    <li>
      {text}{' '}
      <mark>
        <a href={href}>{linkText}</a>
      </mark>
      <div class="small"></div>
    </li>
  );
}

export default function Section({title, items}) {
  return (
    <details>
      <summary>
        <h2 class="as-text">
          <i>_{title.toUpperCase()}</i>
        </h2>
      </summary>
      <ul class="list list-items">
        {items.map(item => (
          <SectionItem {...item} />
        ))}
      </ul>
    </details>
  );
}
