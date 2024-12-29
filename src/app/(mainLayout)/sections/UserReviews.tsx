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
    <section style={{ background: "#1A1A1A", borderRadius: "24px", margin: "2rem 4rem" }}>
      <div style={{ paddingTop: "8rem" }} className="d-flex justify-content-around ">
        <div style={{ maxWidth: "20%" }} className={` `}>
          <h1 className="fw-light mb-4">What people are saying</h1>
        </div>
        <div style={{ background: "rgb(17 17 17 / 51%)", borderRadius: "10px" }} className="position-relative col-7">
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
            className={` mySwiper p-5 `}
            loop={true}
            spaceBetween={30}
          >
            {quoteData.map((e, index) => (
              <SwiperSlide key={index}>
                <h2 style={{ height: "250px", textAlign: "left" }} className={`fw-light review-description`}>
                  &ldquo;{e.description}&rdquo;
                </h2>
                <div style={{ gap: "15px" }} className="d-flex">
                  <div style={{ gap: "20px", textAlign: "left" }} className="d-flex me-auto align-items-center">
                    <Image style={{ borderRadius: "9999px" }} priority={true} src={e.source.src} width={64} height={1000} quality={100} className={`${styles["object-fit"]} review-avatar`} alt={e.name}></Image>
                    <div style={{ fontSize: "20px" }} className="fw-light">
                      <div className="review-name">{e.name}</div>
                      <div className="review-role" style={{ color: "#6B7280" }}>
                        <BiSolidBriefcaseAlt2 style={{ transform: "translateY(-2px)" }}></BiSolidBriefcaseAlt2>&nbsp;{e.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div style={{ gap: "10px", position: "absolute", right: "35px", bottom: "45px", zIndex: "9999" }} className="d-flex justify-content-xxl-end">
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
      <div style={{ paddingTop: "6rem" }} className={`${styles["stats-grid"]} pb-5`}>
        {/* {statsData.map((e, i) => (
          <div key={i} className={`${styles["stats"]}`}>
            <h1 style={{ fontSize: "48px" }}>{e.number}</h1>
            <p className="fs-5">{e.description}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
}
