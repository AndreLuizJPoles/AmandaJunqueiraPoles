import { StarIcon } from '@heroicons/react/24/outline'
import { TitleCard } from '../components/TitleCard/TitleCard'
import { Carousel, CarouselCard, type ICarouselCard } from '../components/Carousel/Carousel'
import { SwiperSlide, type SwiperProps } from 'swiper/react'

interface ServicesProps {
  cards: Array<ICarouselCard>
}

export function Services({ cards }: ServicesProps) {
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
      <TitleCard title='Serviços' icon={StarIcon} />
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