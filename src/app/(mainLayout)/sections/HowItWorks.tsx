import FadeInElement from "@/components/FadeInElement";
import { stepData } from "@/global/homeData";
import styles from "@/styles/home-styles/HowItWorks.module.css";
import Image from "next/image";
import IntroSection from "@/components/IntroSection";
export default function HowItWorks() {
  return (
    <section style={{ paddingBottom: "15rem", background: "#1A1A1A" }} className={`d-flex flex-column justify-content-center `}>
      <div className={`${styles["wave"]}`}></div>
          <IntroSection header="Your Journey, Simplified" title='how vern works' description={<> We believe great software tools unleash your creative <br className="d-none d-md-block"></br>potential while fading into the background.</>}></IntroSection>
      <div style={{ gap: "10em", marginTop: "8em" }} className={`d-flex flex-column col-10 mx-auto  align-items-center`}>
        {stepData.map((data, i) => (
 <FadeInElement key={data.id} value="fade-in-section">
          <div className={`${styles["steps-container"]} mt-3 align-items-center d-flex position-relative flex-wrap-reverse`}>
            <div style={{ gap: "2.5em", flex: "1 1 400px" }} className="d-flex justify-content-center">
                <Image priority src={data.icon} width={65} height={65} alt={data.id} className={`mb-4 item d-none d-md-block`}></Image>
                <div style={{ maxWidth: "30em" }} className={`item`}>
                  <div className={`${styles['smaller-steps-container']}`}>
                    <h2>{data.title}</h2>
                    <div className="secondary mt-4 fw-light">{data.description}</div>
                  </div>{" "}
                </div>
            </div>
            <div style={{ flex: "1 1 450px" }} className="text-center">
              <FadeInElement value="fade-in-from-z">
                <Image src={data.image} alt={`step-${i + 1}`} width={450} height={450} className="item globalObjectFit" quality={100}></Image>
              </FadeInElement>
            </div>
            <div className={`${styles["circled-number-container"]}`}>
              <FadeInElement value="fade-in-from-z">
                <div className="circled-number item">
                  <span style={{ fontSize: "1.3em" }}>{i + 1}</span>
                </div>
              </FadeInElement>
            </div>
          </div>
          </FadeInElement>
        ))}
      </div>
    </section>
  );
}
