import './Card.css'

export interface ICard {
  img?: string
  imgAlt?: string
  children?: React.ReactNode
}

export function Card ({ img, imgAlt, children}: ICard) {
  return(
    <div className='card'>
      <div className='card-text'>
        {children}
      </div>
      <div className='card-image'>
        <img src={img} alt={imgAlt} />
      </div>
    </div>
  )
}