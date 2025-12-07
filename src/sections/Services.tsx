import { StarIcon } from "@heroicons/react/24/outline";
import { TitleCard } from "../components/TitleCard/TitleCard";
import { Carousel, CarouselCard } from "../components/Carousel/Carousel";

export function Services() {
  return (
    <>
      <TitleCard title="Serviços" icon={StarIcon} />
      <Carousel>
        <CarouselCard
          img="https://placehold.co/400x200"
          title="Primeiro Card"
        >
          Texto do primeiro card.
        </CarouselCard>

        <CarouselCard
          img="https://placehold.co/400x200?text=Card+2"
          title="Segundo Card"
        >
          Mais conteúdo aqui.
        </CarouselCard>

        <CarouselCard
          img="https://placehold.co/400x200?text=Card+3"
          title="Terceiro Card"
        >
          Outro card para o carrossel.
        </CarouselCard>
        <CarouselCard
          img="https://placehold.co/400x200"
          title="Primeiro Card"
        >
          Texto do primeiro card.
        </CarouselCard>

        <CarouselCard
          img="https://placehold.co/400x200?text=Card+2"
          title="Segundo Card"
        >
          Mais conteúdo aqui.
        </CarouselCard>

        <CarouselCard
          img="https://placehold.co/400x200?text=Card+3"
          title="Terceiro Card"
        >
          Outro card para o carrossel.
        </CarouselCard>
        <CarouselCard
          img="https://placehold.co/400x200"
          title="Primeiro Card"
        >
          Texto do primeiro card.
        </CarouselCard>

        <CarouselCard
          img="https://placehold.co/400x200?text=Card+2"
          title="Segundo Card"
        >
          Mais conteúdo aqui.
        </CarouselCard>

        <CarouselCard
          img="https://placehold.co/400x200?text=Card+3"
          title="Terceiro Card"
        >
          Outro card para o carrossel.
        </CarouselCard>
      </Carousel>

    </>
  )
}