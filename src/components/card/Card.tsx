import './card.css'

export interface ICard {
  image?: string
  imageAlt?: string
  children?: React.ReactNode
}

export function Card ({ image, imageAlt, children}: ICard) {
  return(
    <div className='card'>
      <div className='card-text'>
        {children}
      </div>
      <div className='card-image'>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  )
}