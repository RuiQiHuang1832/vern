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
    <div className="d-flex justify-content-end align-items-center ">
            <div id="accordionExample" className="home-page-accordion accordion col-6 order-1 pb-5">
              <div className=" px-4 mb-4 col-10 text-wrap-balance">
              <h6 style={{letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:"500", fontFamily:"monospace"}}>Frequently Asked Questions</h6>
                <h1 className="my-4">We&apos;re here to answer all your questions</h1>
                <p className="fs-5 text-secondary fw-light">Everything you need to know about the product, team, and billing. Can’t find the answer you’re looking for? Post your question in our <span className="text-decoration-underline">community forum!</span></p>
              </div>
              {accordionData.map((accordion,i) => (
                <div  key={accordion.id} className={`accordion-item p-4 ${styles["accordion-item-home"]} ${activeItem === i ? 'active' : ''}`}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  onClick={() => toggleAccordion(i)}
 type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`} aria-expanded="false" aria-controls={accordion.id}>
                      <div className="fw-light accordion-question text-white fs-4">{i+1}. {accordion.question}</div>
                    </button>
                  </h2>
                  <div id={accordion.id} data-bs-parent="#accordionExample" className="accordion-collapse collapse">
                    <div style={{ color: "white" }} className="accordion-body fw-light fs-6">
                      {accordion.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto">
            <FadeInElement value="fade-in-from-z">
<Image src={faqguy} alt="faqguy" width={350} height={0} style={{ height: "auto"}} className="item" quality={100}></Image>
</FadeInElement>
</div>
            </div>
          
    
  )
}
