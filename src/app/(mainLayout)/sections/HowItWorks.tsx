import FadeInElement from "@/components/FadeInElement";
import { stepData } from "@/global/homeData";
import styles from "@/styles/home-styles/HowItWorks.module.css";
import Image from "next/image";
export default function HowItWorks() {
  return (
    <section style={{ paddingBottom: "15rem", background: "#1A1A1A" }} className={`d-flex flex-column justify-content-center px-4 px-xl-0 `}>
      <div className={`${styles["wave"]}`}></div>
      <div className={`text-center mx-auto container col-8 mb-5`}>
        <FadeInElement value="fade-in-section">
        <h6 className="item slow item-1" style={{ letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "500", fontFamily: "monospace" }}>Your Journey, Simplified</h6>
        <h1 className="my-4 item slow">how vern works</h1>
        <p className="fs-5 secondary fw-light item slow item-2">
          We believe great software tools unleash your creative <br></br> potential while fading into the background.
        </p>
        </FadeInElement>

      </div>
      <div style={{ gap: "10em", marginTop: "8em" }} className={`d-flex flex-column col-md-10 col mx-auto  align-items-center`}>
        {stepData.map((data, i) => (
 <FadeInElement key={data.id} value="fade-in-section">
          <div style={{ gap: "5em", minHeight: "30em", borderRadius: "24px", background: "#121212", padding: "0 3em" }} className={`mt-3 align-items-center d-flex position-relative`}>
            <div style={{ gap: "2.5em", flex: "1" }} className="d-flex justify-content-center">
                <Image priority src={data.icon} width={65} height={65} alt={data.id} className={`mb-4 item`}></Image>
                <div style={{ maxWidth: "30em" }} className={`item`}>
                  <div style={{ padding: "2em", borderRadius: "24px", background: "#1A1A1A" }}>
                    <h2>{data.title}</h2>
                    <div className="secondary mt-4 fw-light">{data.description}</div>
                  </div>{" "}
                </div>
            </div>
            <div style={{ flex: "1" }} className="text-center">
              <FadeInElement value="fade-in-from-z">
                <Image src={data.image} alt={`step-${i + 1}`} width={450} height={0} style={{ height: "auto" }} className="item" quality={100}></Image>
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
