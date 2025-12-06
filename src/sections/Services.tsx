import { StarIcon } from "@heroicons/react/24/outline";
import { TitleCard } from "../components/TitleCard/TitleCard";
import { CarouselCard } from "../components/Carousel/Carousel";

export function Services() {
   return (
      <>
         <TitleCard title="Serviços" icon={StarIcon} />
         <CarouselCard img="src/assets/psychology.png" imgAlt="imagem" title="Lorem Ipsum">   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec est eleifend, fermentum dolor nec, tempor eros. Phasellus fermentum commodo imperdiet. Praesent sed sollicitudin libero. Fusce finibus maximus vulputate. Aenean ut neque aliquet nisi vestibulum sagittis. Etiam ac tortor vel mi tristique convallis sit amet a nisl. </CarouselCard>
      </>
   )
}