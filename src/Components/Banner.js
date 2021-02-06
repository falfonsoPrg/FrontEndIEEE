import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: '/images/BannerIEEE1.jpg',
    altText: 'Todos',
    caption: 'Bienvenidos a IEEE'
  },
  {
    src: '/images/BannerIEEE2.jpg',
    altText: 'Para tí',
    caption: 'En la Universidad El Bosque'
  },
  {
    src: '/images/BannerIEEE3.jpg',
    altText: 'Ven con nosotros',
    caption: 'Grandes experiencias te esperan'
  },
  {
    src: '/images/BannerIEEE4.jpg',
    altText: 'Somos un equipo',
    caption: 'Somos Rama IEEE - Universidad El Bosque'
  }
];

const Banner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="600px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Banner;