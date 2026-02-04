
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { Card, type ICard } from "../components/Card/Card"
import { TitleCard } from "../components/TitleCard/TitleCard"

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