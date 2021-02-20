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
    src: '/images/BannerIEEE1.png',
    altText: 'Computer Society',
    caption: 'Computer Society'
  },
  {
    src: '/images/BannerIEEE2.png',
    altText: 'Communications Society',
    caption: 'Communications Society'
  },
  {
    src: '/images/BannerIEEE3.png',
    altText: 'Enginnering in Medecine and Biology',
    caption: 'EMB Unbosque'
  },
  {
    src: '/images/BannerIEEE4.png',
    altText: 'Industry Applications Society',
    caption: 'IAS SB Chapter'
  },
  {
    src: '/images/BannerIEEE5.png',
    altText: 'Internet of things- Comunidad en construcción',
    caption: 'Internet of things- Comunidad en construcción'
  },
  {
    src: '/images/BannerIEEE6.png',
    altText: 'Rama Estudiantil IEEE',
    caption: 'Rama Estudiantil IEEE'
  },
  {
    src: '/images/BannerIEEE7.png',
    altText: 'Robotics & Automation Society',
    caption: 'RA Society'
  },
  {
    src: '/images/BannerIEEE8.png',
    altText: 'Society on Social Implications of Technology',
    caption: 'SSIT Unbosque'
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