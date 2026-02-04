import './ContactCard.css'

export interface IContactCard {
  icon: string;
  label: string;
  value: string;
}

export function ContactCard({ items }: {items: Array<IContactCard>}) {
  return <>
    <div className="contact-card">
      {items.map((card, index) => (
        <ContactItem key={index} {...card} />
      ))}
    </div>
  </>
}

function ContactItem({ icon, label, value }: IContactCard) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        {value ? (
          <a href={value} className="contact-label"> <img src={icon} alt={`${label} icon`} className="contact-icon" /> {label}</a>
        ) : (
          <span
            className="contact-label"
            style={{ cursor: 'pointer' }}
            onClick={() => navigator.clipboard.writeText(label)}
            title="Copiar para área de transferência"
          >
            <img src={icon} alt={`${label} icon`} className="contact-icon" />
            {label}
          </span>
        )}
      </div>
    </div>
  );
}