import './TopMenu.css'

export interface ITopMenuItem {
  label: string;
  href: string;
}

export function TopMenu({ items, logoSrc, logoAlt }: { items: Array<ITopMenuItem>, logoSrc: string, logoAlt: string }) {
  console.log(items)

  return (
    <>
      <nav className="top-menu">
        <img src={logoSrc} alt={logoAlt} />
        <ul className="options-list">
          {items.length > 0 && items.map((item, index) => (
            <li key={index}>
              <a className="list-item" href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}