import Image from "next/image";
import providers from "@/assets/svg/providers.svg";
import frameworks from "@/assets/svg/frameworks.svg";
import { featuresData } from "@/global/homeData";
import styles from "@/styles/home-styles/FrameworkIntegrations.module.css";
import FadeInElement from "@/components/FadeInElement";

export default function FrameworkIntegrations() {
  return (
    <section style={{background:"#1A1A1A", paddingBottom:"10rem"}}>
            <div className={`${styles["wave"]}`}></div>

      <div className={`text-center mx-auto container col-8 mb-5 text-wrap-balance`}>
      <FadeInElement value="fade-in-section">

      <h6 className="item slow item-1" style={{letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:"500", fontFamily:"monospace"}}>Framework Integration</h6>

        <h1 className=" my-4 item slow">compatible with modern technologies</h1>
        <p className="fs-5 secondary fw-light item slow item-2">Built to integrate seamlessly with the frameworks <br></br> and tools  you already know and love.</p>
        </FadeInElement>

      </div>
      <div className={`${styles["logo-scroll-container"]} mx-auto`}>
        <div className={`${styles["logo-track"]}`}>
          <Image src={providers} alt="provider icons" className="logo" />
          <Image src={providers} alt="provider icons Duplicate" className="logo" />
        </div>
        <div className={`${styles["fade-out-left"]}`}></div>
        <div className={`${styles["fade-out-right"]}`}></div>
      </div>
      <div className={`${styles["logo-scroll-container"]} mx-auto`}>
        <div className={`${styles["logo-track-left"]}`}>
          <Image src={frameworks} alt="framework Icons" className="logo" />
          <Image src={frameworks} alt="framework Icons Duplicate" className="logo" />
        </div>
        <div className={`${styles["fade-out-left"]}`}></div>
        <div className={`${styles["fade-out-right"]}`}></div>
      </div>

      <div className={`d-flex  flex-lg-row flex-column mx-auto ${styles["creative-process-container"]} my-5`}>

        <div style={{ flex: "1 0 auto" }} className="d-flex flex-column col-lg-3 col align-items-center ">
          {featuresData.map((e, i) => (

            <div key={i}  className={`my-3 col-4 `}>
                                <FadeInElement value="fade-in-section-left">

             <div className={`item item-${i}`} style={{padding:"2em", borderRadius:"24px", background:"#121212"}}>
              <h4 className="mb-3">{e.name}</h4>
              <div className="secondary fw-light">{e.description}</div>
            </div>
            </FadeInElement>

            </div>

          ))}
        </div>

      </div>

    </section>
  );
}
