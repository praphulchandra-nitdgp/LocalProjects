"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import team from "../../public/assets/Images/team_aavishkar.jpg";
import ResponsiveMarquee from "@/components/Aninline/page";
import Faqs from "@/components/Faqs/page";
import Carousel from "@/components/Carousel/page";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const carouselSlides = [
    {
      id: 1,
      image: "/assets/Images/Home.jpg",
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      image: "/assets/Images/TImeline.jpeg",
      title: "Timeline",
      link: "/timeline",
    },
    {
      id: 3,
      image: "/assets/Images/Events.jpg",
      title: "Events",
      link: "/events",
    },
    {
      id: 4,
      image: "/assets/Images/Comms.png",
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 5,
      image: "/assets/Images/Sponsors.png",
      title: "Sponsors",
      link: "/sponsors",
    },
  ];
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const fadeRef = useRef(null);
  const counterContainerRef = useRef(null);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  const text = "Technology meets Tradition, Innovation meets Inspiration.";
  const [displayedText, setDisplayedText] = useState("");

  const [counters, setCounters] = useState({
    events: 0,
    attendees: 0,
    days: 0,
  });
  // Target values for the counters
  const targetValues = {
    events: 50,
    attendees: 5000,
    days: 4,
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of element is visible
    triggerOnce: false, // Allow re-animating when scrolling back
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 400,
        easing: "ease",
        once: true,
      });
    });
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 1, opacity: 1 }, // Initial State
      {
        scale: 2.5,
        opacity: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 20%",
          end: "bottom+=300 top",
          scrub: 2,
        },
      }
    );
  }, []);

  // Start Counter Animation on Reload
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounterVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterContainerRef.current)
      observer.observe(counterContainerRef.current);

    return () => {
      if (counterContainerRef.current)
        observer.unobserve(counterContainerRef.current);
    };
  }, []);

  // Counter animation with GSAP
  useEffect(() => {
    if (!isCounterVisible) return;

    const targetValues = {
      events: 50,
      attendees: 5000,
      days: 4,
    };

    const counterProxy = {
      events: 0,
      attendees: 0,
      days: 0,
    };

    // Create a single timeline for all counters
    const tl = gsap.timeline({
      defaults: { duration: 2.5, ease: "expo.out" },
    });

    tl.to(counterProxy, {
      events: targetValues.events,
      onUpdate: () => {
        setCounters({
          events: Math.ceil(counterProxy.events),
          attendees: Math.ceil(counterProxy.attendees),
          days: Math.ceil(counterProxy.days),
        });
      },
      ease: "power4.out",
    })
      .to(
        counterProxy,
        {
          attendees: targetValues.attendees,
        },
        0
      ) // Start at same time
      .to(
        counterProxy,
        {
          days: targetValues.days,
        },
        0
      );

    return () => {
      tl.kill(); // Cleanup animation on unmount
    };
  }, [isCounterVisible]);

  return (
    <>
      <div
        id="heroID"
        className="min-h-screen flex flex-col justify-center items-center py-12 md:py-24 bg-[url('/assets/Images/MainBG.png')] bg-cover bg-center overflow-x-hidden"
      >
        {/* Centered Title and Fest Details */}
        <div
          ref={titleRef}
          id={styles["title-container"]}
          className="opacity-100"
        >
          <p id={styles["aarohan-title"]}>Aarohan</p>
          <p id={styles["fest-details"]}>
            MARCH 20-23 &nbsp; | &nbsp; LORDS ARENA
          </p>
        </div>

        {/* Typewriter Effect */}
        <div id={styles["typewriter-container"]}>
          <h1 id={styles["typewriter-text"]}>
            {displayedText}
            <span id={styles["animate-blink"]}>|</span>
          </h1>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#120101] to-[#2A0404]">
        <div className=" m-0 pb-25">
          <div className="container mx-auto mt-40">
            <h2
              className="text-[#FEF1DA] px-1.5 text-center text-4xl md:text-5xl mb-30"
              data-aos="fade-down"
            >
              2nd Largest Technical Fest In Eastern India
            </h2>
            <div className="flex justify-center">
              <div
                ref={counterContainerRef}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
              >
                {/* EVENT COUNTER */}
                <div data-aos="fade-up" data-aos-delay="100">
                  <div className="flex justify-center">
                    <div
                      className="text-6xl md:text-6xl font-bold text-[#FEF1DA] mb-2 flex-shrink-0 text-center"
                      style={{ minWidth: "6rem" }} // 🔹 Fixed width to prevent shifting
                    >
                      {counters.events}+
                    </div>
                  </div>
                  <div className="text-[#FEF1DA] uppercase tracking-wider">
                    EVENTS
                  </div>
                </div>

                {/* ATTENDEE COUNTER */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <div className="flex justify-center">
                    <div
                      className="text-6xl md:text-6xl font-bold text-[#FEF1DA] mb-2 flex-shrink-0 text-center"
                      style={{ minWidth: "9rem" }} // 🔹 Adjust width for large numbers
                    >
                      {counters.attendees}+
                    </div>
                  </div>
                  <div className="text-[#FEF1DA] uppercase tracking-wider">
                    ATTENDEES
                  </div>
                </div>

                {/* DAYS COUNTER */}
                <div data-aos="fade-up" data-aos-delay="500">
                  <div className="flex justify-center">
                    <div
                      className="text-6xl md:text-6xl font-bold text-[#FEF1DA] mb-2 flex-shrink-0 text-center"
                      style={{ minWidth: "4rem" }} // 🔹 Ensures single-digit doesn't shift
                    >
                      {counters.days}
                    </div>
                  </div>
                  <div className="text-[#FEF1DA] uppercase tracking-wider">
                    DAYS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* scroll animation */}
        <ResponsiveMarquee />
        {/* scroll animation */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:h-screen"
        >
          <motion.h1
            className={`text-7xl md:text-8xl pb-5 font-extrabold text-center flex justify-center mt-20 mb-12`}
            variants={textVariants}
          >
            <motion.span className="text-[#FEF1DA]">DIVE</motion.span>

            <motion.span
              className="mx-4 text-transparent"
              style={{
                WebkitTextStroke: "1px #FEF1DA",
                textStroke: "1px #FEF1DA",
              }}
            >
              IN
            </motion.span>
          </motion.h1>

          <Carousel slides={carouselSlides} gap={10} initialActiveIndex={0} />
        </motion.div>
        <div className=" hidden md:block pb-35"></div>
        <Faqs />
      </div>
    </>
  );
}
