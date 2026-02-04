import './TitleCard.css'

interface ITitleCard {
  title: string
  icon: React.ElementType
}

export function TitleCard({ title, icon: Icon }: ITitleCard) {
  return (
    <div className="title-card">
      <Icon className="title-card-icon" />
      <h1>{title}</h1>
    </div>
  )
}