
import bbdo from "@/assets/svg/bbdo.svg"
import discord from "@/assets/svg/discord.svg"
import dropbox from "@/assets/svg/dropbox.svg"
import greenhouse from "@/assets/svg/greenhouse.svg"
import ideo from "@/assets/svg/ideo.svg"
import monday from "@/assets/svg/monday.svg"
import ncr from "@/assets/svg/ncr.svg"
import nyt from "@/assets/svg/nyt.svg"
import orange from "@/assets/svg/orange.svg"
import philips from "@/assets/svg/philips.svg"
import ted from "@/assets/svg/ted.svg"
import upwork from "@/assets/svg/upwork.svg"
import { IoTriangle } from "react-icons/io5";
import Button from "@/components/Button";
import styles from "@/styles/home-styles/CallToAction.module.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { WEBSITE_NAME } from "@/global/global";

export default function CallToAction() {
  return (
    <section style={{ padding: "0rem 0rem 6rem 0", backgroundColor:"black" }}>
                  <div className={`${styles["wave"]}`}></div>

    <div style={{ gap: "60px" }} className="d-flex justify-content-center mb-5">
      <div className="col-5">

        <h1 style={{ fontSize: "88px" }} className={`fw-bold text-wrap-balance item mb-4 lh-1`}>
          Ready to get started?
        </h1>

        <p style={{ fontSize: "20px"}} className={` secondary text-wrap-pretty mb-5 fw-light`}>
        Experience {WEBSITE_NAME} for free—submit reviews, rate media, and connect with enthusiasts. Upgrade with an optional subscription for even more features!
        </p>
        <div className={`d-flex justify-content-start  ${styles["btn-container"]}`}>
          <Button buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["support-button"]}`}>
            <span style={{ color: "black" }}>
              <IoTriangle></IoTriangle>&nbsp;Start Reviewing
            </span>
            <BsArrowRight className={`${styles["support-arrow"]}`} color="black" size="1em"></BsArrowRight>
          </Button>
        </div>
      </div>
      <div>
        <h6 className="secondary">EMPOWERING A COMMUNITY OF PASSIONATE REVIEWERS AT</h6>
        <div style={{ opacity: "0.5" }} className={`${styles["logo-grid"]} position-relative mt-5`}>
          <Image src={upwork} alt="upwork"></Image>
          <Image src={ideo} alt="ideo"></Image>
          <Image src={discord} alt="discord"></Image>
          <Image src={dropbox} alt="dropbox"></Image>
          <Image src={greenhouse} alt="greenhouse"></Image>
          <Image src={bbdo} alt="bbdo"></Image>
          <Image src={monday} alt="monday"></Image>
          <Image src={ncr} alt="ncr"></Image>
          <Image src={nyt} width="160" alt="nyt"></Image>
          <Image src={orange} width="130" alt="orange"></Image>
          <Image src={philips} alt="philips"></Image>
          <Image src={ted} alt="ted"></Image>
        </div>
      </div>
    </div>
  </section>
  )
}
