import FadeInElement from "@/components/FadeInElement";
import { stepData } from "@/global/homeData";
import styles from "@/styles/home-styles/HowItWorks.module.css";
import Image from "next/image";
export default function HowitWorks() {
  return (
    <section style={{ padding: "16rem 0", background:"#1A1A1A" }} className={`d-flex flex-column justify-content-center px-4 px-xl-0 ${styles["section-container-style-lighter"]}`}>
    <div className={`col-md-10 col mb-5 ${styles["steps-container"]} text-wrap-balance`}>
      <h1 className="fw-bolder mb-4 ">How it works</h1>
      <p className="fs-6 text-secondary">We believe great software tools unleash your creative potential while fading into the background.</p>
    </div>
    <div className={`d-flex flex-column col-md-10 col mx-auto  align-items-center`}>
      {stepData.map((data, i) => (
        <div key={data.id} className={`mt-3 col-10 position-relative`}>
               <div style={{left:"50%"}} className="position-absolute">
                <span className={`${styles["circled-number"]}`}>{i+1}</span>
                </div>
          <div style={{gap:"2em"}} className="d-flex p-5 justify-content-center">
          <FadeInElement value="fade-in-from-z">
            <Image priority src={data.icon} width={65} height={65} alt={data.id} className={`mb-4 item item-${i}`}></Image>
          </FadeInElement>
          <FadeInElement value="fade-in-section">
            <div style={{maxWidth:"40em"}}  className={`item item-${i} slow`}>
            <h2>{data.title}</h2>
            <p  className="text-secondary">{data.description}</p>
            </div>
          </FadeInElement>
          </div>
        </div>
   
      ))}
    </div>
  </section>
  )
}
