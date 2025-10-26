// components/Carousel.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import Link from "next/link";

const Carousel = ({ slides, gap = 40, initialActiveIndex = 2 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
  }, [slides.length]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.killTweensOf(slideRefs.current.filter(Boolean));

    const slideWidth = isMobile ? 120 : 250;
    const slideWithGap = slideWidth + (isMobile ? gap / 2 : gap);

    slides.forEach((_, index) => {
      const slide = slideRefs.current[index];
      if (!slide) return;

      let position = index - activeIndex;
      const slideCount = slides.length;

      if (position > slideCount / 2) {
        position -= slideCount;
      } else if (position < -slideCount / 2) {
        position += slideCount;
      }

      const zIndex = 10 - Math.abs(position);

      const opacity = position === 0 ? 1 : 0.5;

      const scale = position === 0 ? 1 : 0.9;

      const x = position * slideWithGap;

      let y = 0;
      if (position < 0) {
        y = position * (isMobile ? 40 : 80);
      } else if (position > 0) {
        y = position * (isMobile ? 40 : 80);
      }
      let rotation = 0;
      if (position < 0) {
        rotation = position * (isMobile ? 5 : 15);
      } else if (position > 0) {
        rotation = position * (isMobile ? 5 : 15);
      }
      // let initialY = 0;
      // let initialRotation = 0;

      // if (position < 0) {
      //   initialY = position * (isMobile ? 10 : 20);
      //   initialRotation = position * (isMobile ? 3 : 5);
      // } else if (position > 0) {
      //   initialY = position * (isMobile ? 10 : 20);
      //   initialRotation = position * (isMobile ? 3 : 5);
      // }

      gsap.to(slide, {
        scrollTrigger: slide,
        x,
        y,
        rotation,
        scale,
        opacity,
        zIndex,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  }, [activeIndex, slides, gap, isMobile]);

  const goToSlide = (index) => {
    let targetIndex = index;

    if (targetIndex >= slides.length) {
      targetIndex = 0;
    }

    if (targetIndex < 0) {
      targetIndex = slides.length - 1;
    }

    setActiveIndex(targetIndex);
  };

  const goToPrevSlide = () => {
    goToSlide(activeIndex - 1);
  };

  const goToNextSlide = () => {
    goToSlide(activeIndex + 1);
  };

  return (
    <div
      className="w-full sm:h-full py-8 md:py-16 relative 
        overflow-hidden 2xl:overflow-visible mt-20"
    >
      <div
        ref={carouselRef}
        className="carousel-container relative h-80 md:h-96 w-full"
      >
        <button
          onClick={goToPrevSlide}
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 px-2 py-2 md:px-5 md:py-5 bg-orange-100 text-2xl  text-black rounded-full hover:bg-orange-200 transition-colors opacity-70 hover:opacity-80 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          aria-label="Previous slide"
        >
          <FaLessThan />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 px-2 py-2 md:px-5 md:py-5 bg-orange-100 text-2xl text-black rounded-full hover:bg-orange-200 transition-colors opacity-70 hover:opacity-80 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          aria-label="Next slide"
        >
          <FaGreaterThan />
        </button>

        {(() => {
          const mobileSpacing = isMobile ? 120 : 180;
          const mobileGap = isMobile ? Math.min(gap / 2, 15) : gap / 2;

          return (
            <div className="slides-container h-full relative">
              {slides.map((slide, index) => {
                let position = index - activeIndex;
                const slideCount = slides.length;
                if (position > slideCount / 2) {
                  position -= slideCount;
                } else if (position < -slideCount / 2) {
                  position += slideCount;
                }
                let initialY = 0;
                let initialRotation = 0;

                if (position < 0) {
                  initialY = position * (isMobile ? 10 : 20);
                  initialRotation = position * (isMobile ? 3 : 5);
                } else if (position > 0) {
                  initialY = position * (isMobile ? 10 : 20);
                  initialRotation = position * (isMobile ? 3 : 5);
                }

                return (
                  <div
                    key={slide.id}
                    ref={(el) => {
                      slideRefs.current[index] = el;
                    }}
                    className="slide absolute top-0 left-0 right-0 mx-auto w-40 sm:w-48 md:w-80 h-[250px] sm:h-[280px] md:h-[500px] cursor-pointer transition-shadow duration-300 bg-white rounded-lg shadow-lg overflow-hidden"
                    onClick={() => goToSlide(index)}
                    style={{
                      transform: `translateX(${position *
                        (isMobile ? mobileSpacing + mobileGap : 250 + gap)
                        }px) translateY(${initialY}px) rotate(${initialRotation}deg)`,
                      opacity: index === activeIndex ? 1 : 0.7,
                      zIndex: 10 - Math.abs(position),
                      transformOrigin: "center center",
                    }}
                  >
                    <Link href={slide.link}>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className={`absolute inset-x-0 top-4 pl-5 `}>
                      <h3 className="text-3xl md:text-6xl   text-[#FEF1DA] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {slide.id}
                      </h3>
                    </div>
                    <div className={`absolute inset-x-0 bottom-4 pl-5 $`}>
                      <h3 className="text-xl md:text-4xl   text-[#FEF1DA] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Carousel;