import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  HeroContainer,
  ArrowRight,
  ArrowLeft,
  SlideActive,
  Slide,
  HeroImage,
} from "../styles/heroElements";

const HeroSection = () => {
  const SliderData = [
    {
      image: `/portrait.jpg`,
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/nextjs-photoblog.appspot.com/o/9.jpg?alt=media&token=abbbb0db-5fca-4381-b89e-b6e4dbc6e88e",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/nextjs-photoblog.appspot.com/o/10.jpg?alt=media&token=67824316-c78f-4468-ae43-9f02b6e42470",
    },
  ];

  const [counter, setCounter] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCounter(counter === length - 1 ? 0 : counter + 1);
  };

  const prevSlide = () => {
    setCounter(counter === 0 ? length - 1 : counter - 1);
  };

  // Autoplay
  useEffect(() => {
    const id = setTimeout(() => {
      nextSlide();
    }, 8000);
    return () => {
      clearTimeout(id);
    };
  }, [counter]);

  // A failsafe. If our data isn't an array or the array has no indices, we return null.
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <HeroContainer id="home">
      {SliderData.map((slide, index) => {
        return (
          <>
            {index === counter ? <SlideActive /> : <Slide />}
            {index === counter && (
              <HeroImage>
                <Image
                  src={slide.image}
                  height={3112}
                  width={4096}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={slide.image}
                  loading="eager"
                />
              </HeroImage>
            )}
          </>
        );
      })}
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
    </HeroContainer>
  );
};

export default HeroSection;
