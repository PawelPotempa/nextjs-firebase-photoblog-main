import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
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
      image: `/hero.jpg`,
      id: "one",
    },
    {
      image: `/hero1.jpg`,
      id: "two",
    },
    {
      image: `/hero2.jpg`,
      id: "three",
    },
    {
      image: `/hero3.jpg`,
      id: "three",
    },
    {
      image: `/hero4.jpg`,
      id: "three",
    },
    {
      image: `/hero5.jpg`,
      id: "three",
    },
    {
      image: `/hero6.jpg`,
      id: "three",
    },
    {
      image: `/hero7.jpg`,
      id: "three",
    },
    {
      image: `/hero8.jpg`,
      id: "three",
    },
    {
      image: `/hero9.jpg`,
      id: "three",
    },
    {
      image: `/hero10.jpg`,
      id: "three",
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
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  }, [counter]);

  const displaySlider = SliderData.map((slide, index) => {
    return (
      <>
        {index === counter ? <SlideActive /> : <Slide />}
        {index === counter && (
          <AnimatePresence exitBeforeEnter initial="false">
            <HeroImage
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <Image
                src={slide.image}
                height={1500}
                width={3000}
                quality={80}
                objectFit="cover"
                loading="eager"
              />
            </HeroImage>
          </AnimatePresence>
        )}
      </>
    );
  });

  // A failsafe. If our data isn't an array or the array has no indices, we return null.
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <HeroContainer id="home">
      {displaySlider}
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
    </HeroContainer>
  );
};

export default HeroSection;
