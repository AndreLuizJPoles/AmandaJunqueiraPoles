import { StarIcon } from "@heroicons/react/24/outline";
import { TitleCard } from "../components/TitleCard/TitleCard";
import { Carousel, CarouselCard } from "../components/Carousel/Carousel";
import { SwiperSlide, type SwiperProps } from "swiper/react";

export function Services() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: true },
  }

  return (
    <>
      <TitleCard title="Serviços" icon={StarIcon} />
      <Carousel settings={settings}>
          <SwiperSlide>
            <CarouselCard img="https://imgs.search.brave.com/mBupfZWQC1xknrdTZ9_ZivyAYTUMzy6e1adwOYmp8hE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2ViZnguY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEw/L2dlbmVyaWMtaW1h/Z2UtcGxhY2Vob2xk/ZXIucG5n" imgAlt="testImage">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec est eleifend, fermentum dolor nec, tempor eros. Phasellus fermentum commodo imperdiet. Praesent sed sollicitudin libero. Fusce finibus maximus vulputate. Aenean ut neque aliquet nisi vestibulum sagittis. Etiam ac tortor vel mi tristique convallis sit amet a nisl. Maecenas varius tincidunt enim, id congue turpis convallis lobortis. Pellentesque scelerisque eu dui vitae semper. Etiam sapien sem, venenatis at sem tincidunt, porttitor pretium est. Pellentesque in metus scelerisque, vulputate sem non, congue orci. Curabitur at interdum leo. Sed nisi diam, pulvinar eget velit non, ullamcorper pulvinar magna. Ut ultricies aliquam mi in porta. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis cursus lacus arcu, vel molestie dolor sollicitudin a. Nullam vulputate orci erat, quis hendrerit lorem faucibus eu. Sed vel aliquam tellus.
            </p>
          </CarouselCard>

          <CarouselCard img="https://imgs.search.brave.com/mBupfZWQC1xknrdTZ9_ZivyAYTUMzy6e1adwOYmp8hE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2ViZnguY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEw/L2dlbmVyaWMtaW1h/Z2UtcGxhY2Vob2xk/ZXIucG5n" imgAlt="testImage">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec est eleifend, fermentum dolor nec, tempor eros. Phasellus fermentum commodo imperdiet. Praesent sed sollicitudin libero. Fusce finibus maximus vulputate. Aenean ut neque aliquet nisi vestibulum sagittis. Etiam ac tortor vel mi tristique convallis sit amet a nisl. Maecenas varius tincidunt enim, id congue turpis convallis lobortis. Pellentesque scelerisque eu dui vitae semper. Etiam sapien sem, venenatis at sem tincidunt, porttitor pretium est. Pellentesque in metus scelerisque, vulputate sem non, congue orci. Curabitur at interdum leo. Sed nisi diam, pulvinar eget velit non, ullamcorper pulvinar magna. Ut ultricies aliquam mi in porta. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis cursus lacus arcu, vel molestie dolor sollicitudin a. Nullam vulputate orci erat, quis hendrerit lorem faucibus eu. Sed vel aliquam tellus.
            </p>
          </CarouselCard>

          <CarouselCard img="https://imgs.search.brave.com/mBupfZWQC1xknrdTZ9_ZivyAYTUMzy6e1adwOYmp8hE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2ViZnguY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEw/L2dlbmVyaWMtaW1h/Z2UtcGxhY2Vob2xk/ZXIucG5n" imgAlt="testImage">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec est eleifend, fermentum dolor nec, tempor eros. Phasellus fermentum commodo imperdiet. Praesent sed sollicitudin libero. Fusce finibus maximus vulputate. Aenean ut neque aliquet nisi vestibulum sagittis. Etiam ac tortor vel mi tristique convallis sit amet a nisl. Maecenas varius tincidunt enim, id congue turpis convallis lobortis. Pellentesque scelerisque eu dui vitae semper. Etiam sapien sem, venenatis at sem tincidunt, porttitor pretium est. Pellentesque in metus scelerisque, vulputate sem non, congue orci. Curabitur at interdum leo. Sed nisi diam, pulvinar eget velit non, ullamcorper pulvinar magna. Ut ultricies aliquam mi in porta. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis cursus lacus arcu, vel molestie dolor sollicitudin a. Nullam vulputate orci erat, quis hendrerit lorem faucibus eu. Sed vel aliquam tellus.
            </p>
          </CarouselCard>

          <CarouselCard img="https://imgs.search.brave.com/mBupfZWQC1xknrdTZ9_ZivyAYTUMzy6e1adwOYmp8hE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2ViZnguY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEw/L2dlbmVyaWMtaW1h/Z2UtcGxhY2Vob2xk/ZXIucG5n" imgAlt="testImage">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec est eleifend, fermentum dolor nec, tempor eros. Phasellus fermentum commodo imperdiet. Praesent sed sollicitudin libero. Fusce finibus maximus vulputate. Aenean ut neque aliquet nisi vestibulum sagittis. Etiam ac tortor vel mi tristique convallis sit amet a nisl. Maecenas varius tincidunt enim, id congue turpis convallis lobortis. Pellentesque scelerisque eu dui vitae semper. Etiam sapien sem, venenatis at sem tincidunt, porttitor pretium est. Pellentesque in metus scelerisque, vulputate sem non, congue orci. Curabitur at interdum leo. Sed nisi diam, pulvinar eget velit non, ullamcorper pulvinar magna. Ut ultricies aliquam mi in porta. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis cursus lacus arcu, vel molestie dolor sollicitudin a. Nullam vulputate orci erat, quis hendrerit lorem faucibus eu. Sed vel aliquam tellus.
            </p>
          </CarouselCard>
        </SwiperSlide>
      </Carousel>

    </>
  )
}