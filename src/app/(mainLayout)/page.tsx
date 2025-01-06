"use client";
import image_4 from "@/assets/images/home/illustration-data-4.png";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { sections } from "@/global/sectionsData";
import  { ScrollableArrow } from "@/components/Arrows";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import { stepData, arrowData, accordionData } from "@/global/homeData";
import Newsletter from "@/components/Newsletter";
import FadeInElement from "@/components/FadeInElement";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
// import newsletter from "@/assets/images/newsletter.png";
import UserReviews from "./sections/UserReviews";
import MembershipOptions from "./sections/MembershipOptions";
import CallToAction from "./sections/CallToAction";
import FrameworkIntegrations from "./sections/FrameworkIntegrations";
import ThreeItemShowcase from "./sections/ThreeItemShowcase";
import Support from "@/components/Support";

// used for scrollProgressBar
// const icons: IconType[] = [BsFill0CircleFill, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill];
//  <span className="d-none d-xxl-inline">
//         <ScrollProgressBar startHeight={40} startColor="#172B4D" distance={24.99} icons={icons}></ScrollProgressBar>
//       </span>

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
                {/* <Arrows></Arrows> */}
                <span style={{ color: "rgb(90,90,90)" }}>Elevate Entertainment&nbsp;</span>
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Your Playlist Playground.
              </h1>
              <hr style={{ color: "rgba(255, 255, 255, 0.25)" }} className="fade-in-from-bottom"></hr>
              <p className="fade-in-from-bottom fade-in-delay-1 mb-5">
                Craft and curate your ultimate media collection.&nbsp;
                <span className="d-none d-xl-inline">
                  <br />
                </span>
                Explore, rate, and design playlists tailored to your tastes.
              </p>
              <div className="fade-in-from-bottom fade-in-delay-2 ">
                <a href="" className={`${styles["get-started"]} d-inline-flex text-decoration-none text-white align-items-center learn-more-hover-circle`}>
                  <span className="me-5 fs-5 ">Get started — it&apos;s free!</span>
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
        <ScrollableArrow></ScrollableArrow>
      </div>
      <section id="approach" className={` mx-auto col-xl-6 col-10 col-lg-8`}>
        <h1 style={{ fontSize: "85px" }} className="fw-bolder text-center">
          Our <span style={{}}>Approach</span>
        </h1>
        <hr></hr>
        <p className=" mb-0">Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
      </section>
      <section style={{ padding: "6rem 0" }}>{mapObjectToComponent(sections, HeaderWithImageAndParagraph)}</section>

      <section id="howitworks" style={{ padding: "16rem 0", background:"#1A1A1A" }} className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-lighter"]}`}>
        <div className={`col-md-10 col mb-5 ${styles["steps-container"]} text-wrap-balance`}>
          <h1 className="fw-bolder mb-4 ">3 steps to better media management</h1>
          <p className="fs-6 fw-light ">We believe great software tools unleash your creative potential while fading into the background.</p>
        </div>
        <div className={`${styles["step-grid"]} text-center col-md-10 col mx-auto text-wrap-balance`}>
          {stepData.map((data, i) => (
            <div key={data.id} className={`mt-3 col-10}`}>
              <FadeInElement value="fade-in-from-z">
                <Image priority src={data.source.src} width={50} height={80} alt={data.id} className={`mb-4 item item-${i}`}></Image>
              </FadeInElement>
              <FadeInElement value="fade-in-section">
                <div className={`item item-${i} slow`}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </FadeInElement>
            </div>
          ))}
        </div>
        <div className={`${styles["arrows-container"]} arrows d-none d-xl-block`}>
          {arrowData.map((e, i) => (
            <div key={i} style={{ left: e.left }} className={`${styles["arrow"]}`}>
              <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={e.path} fill="white" />
              </svg>
            </div>
          ))}
        </div>
      </section>

      <ThreeItemShowcase></ThreeItemShowcase>
      <FrameworkIntegrations></FrameworkIntegrations>
      <MembershipOptions></MembershipOptions>
      <Support></Support>

      <UserReviews></UserReviews> 

      <section  style={{ padding: "0rem 4rem 15rem 4rem", background:"#1A1A1A" }} className={`d-flex flex-column justify-content-center   ${styles["view-height-alternative"]}`}>
      <div className={`${styles["wave"]}`}></div>

        <div className="home-page-accordion accordion col-6 ms-auto pb-5">
          <div className=" mb-4">
            <h1 style={{ fontSize: "60px" }} className="fw-light" id="Faq">
              FAQ
            </h1>
          </div>
          {accordionData.map((accordion) => (
            <div key={accordion.id} style={{ width: "90%" }} className={`accordion-item py-4 ${styles["accordion-item-home"]} `}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                  <h4 className="fw-light accordion-question text-secondary">{accordion.question}</h4>
                </button>
              </h2>
              <div id={accordion.id} className="accordion-collapse collapse">
                <h5 style={{ color: "white" }} className="accordion-body fw-light">
                  {accordion.answer}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background:"#121212", borderRadius:"24px"}} className=" p-5">
            <Newsletter></Newsletter>
          </div>

      </section>

      <CallToAction></CallToAction>
    </div>
  );
}
