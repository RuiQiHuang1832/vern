import styles from "@/styles/home-styles/MembershipOptions.module.css";
import Button from "@/components/Button";
import { membershipData } from "@/global/homeData";
// import pricingLogo from "@/assets/images/home/pricing-logos.png"
import Image from "next/image";
import FadeInElement from "@/components/FadeInElement";
import IntroSection from "@/components/IntroSection";
export default function MembershipOptions() {

  return (
    <section  style={{  background:"#121212" }}>
<div className={`${styles["wave"]}`}></div>
          <IntroSection header="Plans & Pricing" title='plans that fit your needs' description={<> Don’t overthink it! Every option is backed by our 30-day money back guarantee.<br className="d-none d-xl-block"></br> We&apos;ll make sure you find the perfect fit!</>}></IntroSection>
      <FadeInElement value="fade-in-section">
      <div style={{ gap: "2rem",  }} className={`mt-5 col-lg-11 col-10 d-flex justify-content-center mx-auto ${styles["wrap"]} `}>
        {membershipData.map((e, i) => (
          <div  key={i} className={`${styles["mem-container"]}  fw-light focus-ring ring-blue item item-${i}`}>
            <div className="d-flex justify-content-between align-items-center">
              <div style={{fontSize:"clamp(1.5rem,3vw,3rem)", fontWeight:"400"}}>{e.plan}</div>  
             <div className="d-none d-xl-block"><Image priority src={e.src} width={70} height={70} alt={"icon"} ></Image>
             </div>
            </div>
            <p style={{fontSize:"clamp(14px, 3vw, 1rem)"}} className="secondary">{e.description}</p>
            <h3 style={{fontSize:"clamp(1rem, 3vw, 1.5rem)"}}>{e.price}{i !== 2 && <small style={{color:"#848484"}}>/month</small>}</h3>
            <div className="py-3">
              <Button buttonColor={{ cssColor: "black" }} type="submit" width="100%" radius="10px" padding="13px" styleClass={`text-white`}>
                {e.type}
              </Button>
            </div>
            {i > 0 && (
              <div className="mt-3">
                Everything in <strong>{membershipData[i - 1].plan}</strong>, plus:
              </div>
            )}
            <ul className="mt-3" style={{ paddingLeft: "1rem" }}>
              {e.features.map((feature, i) => (
                <li style={{ transform: "translateX(2px)" }} className={styles["marker"]} key={i}>
                  {feature}
                </li>
              ))}
            </ul>
            </div>
         
        ))}

      </div>
      </FadeInElement>

    </section>
  );
}
