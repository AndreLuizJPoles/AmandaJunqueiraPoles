import { StarIcon } from '@heroicons/react/24/outline'
import { SwiperSlide, type SwiperProps } from 'swiper/react'
import { Carousel, CarouselCard, TitleCard, type ICarouselCard } from '../components'

interface ServicesProps {
  title: string
  cards: Array<ICarouselCard>
}

export function Services({ title, cards }: ServicesProps) {
  const settings: SwiperProps = {
    spaceBetween: 20,
    slidesPerView: cards.length < 3 ? cards.length : 3,
    navigation: cards.length > 3,
    draggable: cards.length > 3,
    loop: cards.length > 3,
    pagination: { clickable: cards.length > 3 },
  }

  return (
    <>
      <TitleCard title={title} icon={StarIcon} />
      <Carousel settings={settings}>
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <CarouselCard {...card} />
          </SwiperSlide>
        ))}
      </Carousel>

    </>
  )
}