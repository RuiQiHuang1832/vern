"use client";
import styles from "@/styles/home-styles/UserReviews.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
//data
import { quoteData } from "@/global/homeData";
//icons
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
// swiper
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FadeInElement from "@/components/FadeInElement";
// import Stats from "@/components/Stats";

export default function UserReviews() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const progressElement = document.querySelector(".progress-ref");
    const nextButton = document.querySelector(`[data-swiper-next]`);
    const prevButton = document.querySelector(`[data-swiper-prev]`);

    const handleAnimationEnd = () => setIsComplete(true);
    const handleClick = () => {
      setClicked(true);
    };
    if (progressElement) progressElement.addEventListener("animationiteration", handleAnimationEnd);
    if (nextButton) nextButton.addEventListener("click", handleClick);
    if (prevButton) prevButton.addEventListener("click", handleClick);
    return () => {
      if (progressElement) progressElement.removeEventListener("animationiteration", handleAnimationEnd);
      if (nextButton) nextButton.removeEventListener("click", handleClick);
      if (prevButton) prevButton.removeEventListener("click", handleClick);
    };
  }, []); // Only set up the event listener once

  useEffect(() => {
    if (swiperRef.current && isComplete) {
      swiperRef.current.slideNext(); // Change to the next slide
      setIsComplete(false); // Optionally reset state if needed for repeated usage
    }
  }, [isComplete]);



  return (
    <FadeInElement value="fade-in-section-left">
    <section className="col-lg-11 col-10 mx-auto" style={{ background: "#1A1A1A", borderRadius: "24px", margin: "2rem 0rem", marginBottom:"15rem" }}>
      <div  style={{ padding: "5rem 0 5rem 0" }} className={`d-flex justify-content-around flex-wrap`}>
        <div >
          <h1 className="mb-4 text-center col-md-12 col-10 mx-auto text-wrap-pretty">real thoughts <br className="d-none d-xl-inline-block"></br> from our users</h1>
        </div>
        <div style={{ background: "rgb(17 17 17 / 51%)", borderRadius: "10px"}} className="position-relative col-xl-7 col-10 mt-xl-0 mt-5">
          <div style={{ position: "absolute", top: "0", right: "0" }} className={`${clicked && styles["hidden"]}`}>
            <div className={`${styles["hover-circle"]}`}>
              <svg className={styles["scaled-svg"]} width="60" height="60">
                <circle stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30"></circle>
                <circle className={`${styles["circle-animate"]} progress-ref`} stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30" strokeDasharray="175.929" strokeDashoffset="175.929"></circle>
              </svg>
            </div>
          </div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{ nextEl: `.${styles["swiper-button-next"]}`, prevEl: `.${styles["swiper-button-prev"]}` }}
            breakpointsBase="container"
            pagination={false}
            modules={[Navigation, EffectFade]}
            effect="fade"
            speed={300}
            watchSlidesProgress={true}
            allowTouchMove={false}
            fadeEffect={{
              crossFade: true,
            }}
            className={` mySwiper `}
            style={{padding:"max(24px, 5vw)"}}
            loop={true}
            spaceBetween={30}
          >
            {quoteData.map((e, index) => (
              <SwiperSlide key={index}>
                <h2 style={{ height:'clamp(150px, 15vw, 250px)', textAlign: "left",fontSize: 'clamp(1rem,4vw, 2rem)',transition: 'font-size 0.5s ease-in-out' }} className={`fw-light review-description`}>
                  &ldquo;{e.description}&rdquo;
                </h2>
                <div style={{ gap: "15px" }} className="d-flex">
                  <div style={{ gap: "20px", textAlign: "left", }} className="d-flex me-auto align-items-center pt-5">
                    <Image style={{ borderRadius: "9999px", width:'64px', height:"64px" }} priority={true} src={e.source.src} width={64} height={64} quality={100} className={` review-avatar d-none d-sm-block`}  alt={e.name}></Image>
                    <div style={{ fontSize: "20px" }} className="fw-light">
                      <div style={{fontSize: 'clamp(1rem,3vw, 1.5rem)',transition: 'font-size 0.5s ease-in-out'}} className="review-name">{e.name}</div>
                      <div className="review-role" style={{ color: "#6B7280", fontSize: 'clamp(1rem,3vw, 1.5rem)',transition: 'font-size 0.5s ease-in-out' }}>
                        <BiSolidBriefcaseAlt2 style={{ transform: "translateY(-2px)" }}></BiSolidBriefcaseAlt2>&nbsp;{e.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div style={{ gap: "10px", position: "absolute", right: "35px", bottom: "50px", zIndex: "9999" }} className="d-flex justify-content-xxl-end d-none d-lg-flex">
              <div data-swiper-prev style={{ flexShrink: "0" }} className={`${styles["swiper-button-prev"]}`}>
                <MdOutlineKeyboardArrowLeft size="1.5em" />
              </div>

              <div data-swiper-next style={{ flexShrink: "0" }} className={`${styles["swiper-button-next"]} me-3 `}>
                <MdOutlineKeyboardArrowRight size="1.5em" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
    </FadeInElement>

  );
}
