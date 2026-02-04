import { Swiper, type SwiperProps } from 'swiper/react'
import type { ReactNode } from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import './Carousel.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface CarouselProps {
  children: ReactNode
  settings?: SwiperProps
}

export interface ICarouselCard {
  img?: string
  imgAlt?: string
  title?: string
  children?: React.ReactNode
}

export function Carousel({ settings, children }: CarouselProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} { ...settings }>
      {children}
    </Swiper>
  )
}

export function CarouselCard({ img, imgAlt, title, children }: ICarouselCard) {
  return (
    <div className="carousel-card">
      <div className="carousel-card-image">
        <img src={img} alt={imgAlt} />
      </div>

      <div className="carousel-card-content">
        <h2 className='carousel-card-title'>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}