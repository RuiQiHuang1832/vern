import {toolData } from "@/global/homeData";
import FadeInElement from "@/components/FadeInElement";
import styles from "@/styles/home-styles/ThreeItemShowcase.module.css";
import Image from "next/image";
import IntroSection from "@/components/IntroSection";
export default function ThreeItemShowcase() {
  return (
    <section style={{backgroundColor:"#121212", paddingBottom:"10rem"}} className={`d-flex flex-column justify-content-center `}>
            <div className={`${styles["wave"]}`}></div>

        <IntroSection header="Everything you need" title='essential tools for expert reviewers' description={<> We prioritize delivering a streamlined, high-quality workflow designed for efficiency and ease of use. <br className="d-none d-xl-block"></br>Additionally, we offer robust features to enhance your review experience.</>}></IntroSection>
      <div className="spacer" style={{height:"100px"}}></div>
      <FadeInElement value="fade-in-section">
        <div className={`${styles["tool-grid"]}  mx-auto col-10`}>
          {toolData.map((data, i) => (
            <div key={i} className={`${styles["grid-item"]} pb-5 item item-${i}`}>
                <Image priority src={data.source.src} alt={data.title} width={0} height={0} sizes="100vw" style={{ height: "auto", width:"70%"}}  quality={100} ></Image>
              <h4 className="mb-4">{data.title}</h4>
              <div style={{minHeight:"150px"}} className="fw-light secondary">{data.description}</div>
           
            </div>
          ))}
        </div>
      </FadeInElement>

  </section>
  )
}
