import Image from "next/image";
import providers from "@/assets/svg/providers.svg";
import frameworks from "@/assets/svg/frameworks.svg";
import { featuresData } from "@/global/homeData";
import styles from "@/styles/home-styles/FrameworkIntegrations.module.css";

export default function FrameworkIntegrations() {
  return (
    <section style={{background:"#1A1A1A", paddingBottom:"10rem"}}>
            <div className={`${styles["wave"]}`}></div>

      <div style={{ maxWidth: "35rem" }} className={`text-center mx-auto col-md-10 col mb-5 text-wrap-balance`}>
        <h1 className="fw-bold mb-4">Compatible with Modern Technologies</h1>
        <p className="fs-6 fw-light text-secondary">Built to integrate seamlessly with the frameworks and tools you already know and love.</p>
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
            <div key={i} className="my-3 col-4">
              <h3 className="mb-3">{e.name}</h3>
              <p className="text-secondary fw-light">{e.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
