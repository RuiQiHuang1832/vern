'use client'
import styles from "@/styles/Faq.module.css";
import { accordionData } from "@/global/homeData";
import { useState } from "react";
import faqguy from "@/assets/images/faq-guy.png"
import FadeInElement from "./FadeInElement";
import Image from "next/image";
export default function Faq() {
  const [activeItem, setActiveItem] = useState<number|null>(null);

  const toggleAccordion = (index:number ) => {
    setActiveItem((prev) => (prev === index ? null : index)); // Toggle active state
    console.log(index)
  };

  return (
    <div className="d-flex justify-lg-content-end justify-content-center align-items-center ">
            <div id="accordionExample" className="home-page-accordion accordion col-lg-6 col-md-10 col-11 order-1 pb-5">
              <div className=" px-4 mb-4 col-sm-10 text-wrap-balance">
                <FadeInElement value="fade-in-section">
              <h6 className="item slow item-1" style={{letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:"500", fontFamily:"monospace"}}>Frequently Asked Questions</h6>
                <h1 className="my-4 item slow">we&apos;re here to answer all your questions</h1>
                <p className="fs-5 secondary fw-light item slow item-2">Everything you need to know about the product, team, and billing. Can’t find the answer you’re looking for? Post your question in our <span className="text-decoration-underline">community forum!</span></p>
                </FadeInElement>
              </div>
              {accordionData.map((accordion,i) => (
                <FadeInElement  key={accordion.id} value="fade-in-section-left">
                <div   className={`accordion-item p-4  ${styles["accordion-item-home"]} ${activeItem === i ? 'active' : ''}`}>
                  <h2 className="accordion-header">
                    <button className={`accordion-button collapsed ${styles["resp-width"]}`}  onClick={() => toggleAccordion(i)}
 type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                      <div className="fw-light accordion-question text-white fs-4">{i+1}. {accordion.question}</div>
                    </button>
                  </h2>
                  <div id={accordion.id} data-bs-parent="#accordionExample" className="accordion-collapse collapse ">
                    <div style={{ color: "white" }} className="accordion-body fw-light fs-6">
                      {accordion.answer}
                    </div>
                  </div>
                </div>
                </FadeInElement>
              ))}
            </div>
            <div className="mx-auto d-none d-lg-block">
            <FadeInElement value="fade-in-from-z">
<Image src={faqguy} alt="faqguy" width={350} height={0} style={{ height: "auto"}} className="item" quality={100}></Image>
</FadeInElement>
</div>
            </div>
          
    
  )
}
