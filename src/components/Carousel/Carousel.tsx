import './Carousel.css'

export interface ICarouselCard {
  img?: string
  imgAlt?: string
  title?: string
  children?: React.ReactNode
}

export function Carousel() {}

export function CarouselCard({ img, imgAlt, title, children }: ICarouselCard) {
  return (
    <div className="carousel-card">
      <div className='carousel-card-image'>
        <img src={img} alt={imgAlt} />
      </div>
      <div className='carousel-card-content'>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}