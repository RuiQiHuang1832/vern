"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/HomePage.module.css";
import Image from "next/image";

import image_4 from "@/assets/images/home/illustration-data-4.png";

// import { ScrollableArrow } from "@/components/Arrows";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";

import { BsArrowRight } from "react-icons/bs";

import UserReviews from "./sections/UserReviews";
import MembershipOptions from "./sections/MembershipOptions";
import CallToAction from "./sections/CallToAction";
import FrameworkIntegrations from "./sections/FrameworkIntegrations";
import ThreeItemShowcase from "./sections/ThreeItemShowcase";
import HowItWorks from "./sections/HowItWorks";
import OurApproach from "./sections/OurApproach";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Set isVisible to true when the component mounts (page load)
    setIsVisible(true);
  }, []);

  return (
    <div className="text-white">
      <div className="container-lg mt-5 mb-5 ">
        <div className={`row gx-0`}>
          <div className={`col-xxl-6 col-xl-7 col d-flex align-items-center order-xl-1 order-2 justify-content-lg-start justify-content-center`}>
            <div className="text col-10 col-lg-12 col-xl-10">
              <h1 className={`${styles["header"]} responsiveHeader fade-in-from-bottom`}>
                <span style={{ color: "rgb(90,90,90)" }}>Elevate Entertainment&nbsp;</span>
                <span className="d-none d-xl-inline">
                  <br />
                </span>
               Your Playlist Playground
              </h1>
              <hr style={{ color: "rgba(255, 255, 255, 0.25)" }} className="fade-in-from-bottom"></hr>
              <p className="fade-in-from-bottom fade-in-delay-1  mb-5 fw-light">
                Craft and curate your ultimate media collection.&nbsp;
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Explore, rate, and design playlists tailored to your tastes.
              </p>
              <div className="fade-in-from-bottom fade-in-delay-2 ">
                <a href="" className={`${styles["get-started"]} d-inline-flex text-decoration-none text-white align-items-center learn-more-hover-circle`}>
                  <span style={{letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:"600", fontFamily:"monospace"}} className="me-5 fs-5 text-decoration-underline">Get started — it&apos;s free</span>
                  <div className="position-relative">
                    <BsArrowRight className={`${styles["icon"]}`} size="2em"></BsArrowRight>
                    <div className="hover-circle">
                      <svg width="60" height="60">
                        <circle stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30"></circle>
                        <circle className="circle-animate" stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30" strokeDasharray="175.929" strokeDashoffset="175.929"></circle>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={`col-xxl-6 col-xl-5 d-flex justify-content-center order-xl-2 order-1`}>
            <div className="image">
              <Image src={image_4.src} alt="Home page logo" width={660} height={460} priority={true} className={`${styles["objectFit"]} fade-in-image ${isVisible ? "animate" : ""}`} quality={100} />
            </div>
          </div>
        </div>
        {/* <ScrollableArrow></ScrollableArrow> */}
      </div>
      <span className="d-none d-md-inline">
        <ScrollProgressBar></ScrollProgressBar>
      </span>
      <OurApproach></OurApproach>
      <HowItWorks></HowItWorks>
      <ThreeItemShowcase></ThreeItemShowcase>
      <FrameworkIntegrations></FrameworkIntegrations>
      <MembershipOptions></MembershipOptions>
      <UserReviews></UserReviews>
      <div className={`${styles["faq-news-container"]}`}>
        <div className={`${styles["wave"]}`}></div>
        <Faq></Faq>
        <div className="py-5"></div>
        <Newsletter></Newsletter>
      </div>
      <CallToAction></CallToAction>
    </div>
  );
}
