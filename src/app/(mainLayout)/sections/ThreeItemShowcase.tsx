import {toolData } from "@/global/homeData";
import FadeInElement from "@/components/FadeInElement";
import styles from "@/styles/home-styles/ThreeItemShowcase.module.css";
import Image from "next/image";
export default function ThreeItemShowcase() {
  return (
    <section style={{backgroundColor:"#121212", paddingBottom:"10rem"}} className={`d-flex flex-column justify-content-center px-4 px-xl-0 `}>
            <div className={`${styles["wave"]}`}></div>

      <div className={` text-center mx-auto col-md-10 col mb-5`}>
        <h6 style={{letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:"500", fontFamily:"monospace"}}>Everything you need</h6>
        <h1 className=" my-4">essential tools for expert reviewers</h1>
        <p className="fs-5 text-secondary fw-light">We prioritize delivering a streamlined, high-quality workflow designed for efficiency and ease of use. <br></br>Additionally, we offer robust features to enhance your review experience..</p>
      </div>
      <div className="spacer" style={{height:"100px"}}></div>
      <FadeInElement value="fade-in-section">
        <div className={`${styles["tool-grid"]}  mx-auto`}>
          {toolData.map((data, i) => (
            <div key={i} className={`${styles["grid-item"]} pb-5 item item-${i}`}>
                <Image priority src={data.source.src} alt={data.title} width={0} height={0} sizes="100vw" style={{ height: "auto", width:"70%"}}  quality={100}></Image>
              <h4 className="my-4">{data.title}</h4>
              <p className="fw-light text-secondary">{data.description}</p>
            </div>
          ))}
        </div>
      </FadeInElement>

  </section>
  )
}
