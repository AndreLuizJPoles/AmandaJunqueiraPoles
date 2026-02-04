
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { Card, TitleCard, type ICard } from "../components"

interface AboutMeProps {
  title: string
  card: ICard
}

export function AboutMe({ title, card }: AboutMeProps) {
  return (
    <>
      <TitleCard title={title} icon={InformationCircleIcon} />
      <Card img={card.img} imgAlt={card.imgAlt}>
        {card.children}
      </Card>
    </>
  )
}