import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React from "react"
import "./Carousel.css"

export interface ICarouselCard {
  img?: string
  imgAlt?: string
  title?: string
  children?: React.ReactNode
}

export function Carousel({ children }: { children: React.ReactNode }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 900px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    rubberband: false,
  })

  return (
    <div className="carousel-wrapper">
      <button className="carousel-arrow left" onClick={() => instanceRef.current?.prev()}>
        ‹
      </button>

      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child) => (
          <div className="keen-slider__slide">{child}</div>
        ))}
      </div>

      <button className="carousel-arrow right" onClick={() => instanceRef.current?.next()}>
        ›
      </button>
    </div>
  )
}

export function CarouselCard({ img, imgAlt, title, children }: ICarouselCard) {
  return (
    <div className="carousel-card">
      <div className="carousel-card-image">
        <img src={img} alt={imgAlt} />
      </div>

      <div className="carousel-card-content">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}
