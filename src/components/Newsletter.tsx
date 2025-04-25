import Button from "@/components/Button";
import styles from "@/styles/HomePage.module.css";
import { BsArrowRight } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdUnsubscribe } from "react-icons/md";
import { WEBSITE_NAME } from "@/global/global";
import reading from "@/assets/images/reading.png"
import Image from "next/image";
import FadeInElement from "./FadeInElement";

export default function Newsletter() {
  return (
    <FadeInElement value="fade-in-section">
    <div style={{ background: "#121212", borderRadius: "24px" }} className="p-5">

    <div className="d-flex align-items-center flex-wrap">
      <div style={{flex:"1 1 500px"}} className="d-flex flex-column">
        <h1  className="mb-3">
        Join Our Growing Community&nbsp;<SiMinutemailer></SiMinutemailer>
        </h1>
        <p style={{ fontSize: "18px"}} className="mb-3 secondary text-wrap fw-light text-wrap-pretty">
          The {WEBSITE_NAME} newsletter provides creative deep dives, review content, inspiration, and occasional product updates.{" "}
        </p>
      <form style={{ columnGap: "0.5rem", rowGap: "0.5rem" }} className="d-flex flex-column flex-sm-row col-9">
        <input required type="text" style={{ flex: "1",padding:"10px" }} placeholder="Enter email address..." className={`form-control light-border-input ph-color-white`} />
        <Button buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["support-button"]}`}>
          <span style={{ color: "black" }}>Subscribe</span>
          <BsArrowRight className={`${styles["support-arrow"]}`} color="black" size="1em"></BsArrowRight>
        </Button>
      </form>

      <div  className="mt-3 secondary text-wrap-pretty fw-light">
        By subscribing, you agree to our{" "}
        <a href="/tos" className="text-decoration-underline text-reset fw-normal">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/tos" className="text-decoration-underline text-reset fw-normal">
          Privacy Policy
        </a>
        . <span className="text-danger">*</span> <br></br> Unsubscribe anytime. <MdUnsubscribe></MdUnsubscribe> <br></br>
      </div>

      </div>
      <div style={{flex:"1 1 500px"}} className=" text-center " >


        <Image  src={reading} alt="newsletter" width={500} height={500} className="item globalObjectFit d-none d-md-block" quality={100}></Image>

        </div>

    </div>
    </div>
    </FadeInElement>
  );
}


