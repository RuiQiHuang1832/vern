import FadeInElement from "@/components/FadeInElement";
import { stepData } from "@/global/homeData";
import styles from "@/styles/home-styles/HowItWorks.module.css";
import Image from "next/image";
export default function HowitWorks() {
  return (
    <section style={{ paddingBottom: "10rem", background: "#1A1A1A" }} className={`d-flex flex-column justify-content-center px-4 px-xl-0 `}>
      <div className={`${styles["wave"]}`}></div>
      <div className={`text-center mx-auto container col-8 mb-5`}>
        <h6 style={{ letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "500", fontFamily: "monospace" }}>Your Journey, Simplified</h6>
        <h1 className="my-4 ">How Vern works</h1>
        <p className="fs-5 text-secondary fw-light">
          We believe great software tools unleash your creative <br></br> potential while fading into the background.
        </p>
      </div>
      <div className={`d-flex flex-column col-md-10 col mx-auto  align-items-center`}>
        {stepData.map((data, i) => (
          <div key={data.id} style={{ gap: "5em", minHeight: "40em" }} className={`mt-3 align-items-center d-flex position-relative`}>
            <div style={{ gap: "2.5em", flex: "1" }} className="d-flex justify-content-center">
              <FadeInElement value="fade-in-from-z">
                <Image priority src={data.icon} width={65} height={65} alt={data.id} className={`mb-4 item`}></Image>
              </FadeInElement>
              <FadeInElement value="fade-in-section">
                <div style={{ maxWidth: "30em" }} className={`item`}>
                  <h2>{data.title}</h2>
                  <p className="text-secondary mt-4">{data.description}</p>
                </div>
              </FadeInElement>
            </div>
            <div style={{ flex: "1" }} className="text-center">
              <FadeInElement value="fade-in-from-z">
                <Image src={data.image} alt={`step-${i + 1}`} width={450} height={0} style={{ height: "auto" }} className="item" quality={100}></Image>
              </FadeInElement>
            </div>
            <div className={`${styles["circled-number-container"]}`}>
            <FadeInElement value="fade-in-from-z">
              <div className="circled-number item">
                <span style={{ fontSize: "3em" }}>{i + 1}</span>
              </div>
              </FadeInElement>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
