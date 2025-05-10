
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
import FadeInElement from "@/components/FadeInElement";

export default function CallToAction() {
  return (
    <section style={{ padding: "0rem 0rem 6rem 0", backgroundColor:"black" }}>
      <div className={`${styles["wave"]}`}></div>

    <div style={{gap:"3rem", }}  className="d-flex justify-content-between mb-5 col-10 col-md-11 mx-auto flex-wrap">

      <div style={{flex:"1"}} className="col-6">
      <FadeInElement value="fade-in-section">

        <h1 style={{ fontSize: 'clamp(2.5em, 6vw, 5em)'}} className={`fw-bold  item mb-4 lh-1 item slow item-1`}>
          Ready to get started?
        </h1>
        <p className={`mobile-font secondary text-wrap-pretty mb-5 fw-light item slow`}>
        Experience {WEBSITE_NAME} for free—submit reviews, rate media, and connect with enthusiasts. Upgrade with an optional subscription for even more features!
        </p>

        <div className={`d-flex justify-content-start  ${styles["btn-container"]} item slow item-2`}>
          <Button buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["support-button"]}`}>
            <span style={{ color: "black" }}>
              <IoTriangle></IoTriangle>&nbsp;Start Reviewing
            </span>
            <BsArrowRight className={`${styles["support-arrow"]}`} color="black" size="1em"></BsArrowRight>
          </Button>
        </div>
        </FadeInElement>

      </div>

      <div style={{flex: "1"}}>
        <h6 className="secondary">EMPOWERING A COMMUNITY OF PASSIONATE REVIEWERS AT</h6>
        <div style={{ opacity: "0.5" }} className={`${styles["logo-grid"]} position-relative mt-5`}>
          <Image src={upwork} alt="upwork" width={90} className="globalObjectFit"></Image>
          <Image src={ideo} alt="ideo" width={80} className="globalObjectFit"></Image>
          <Image src={discord} alt="discord" width={120} className="globalObjectFit"></Image>
          <Image src={dropbox} alt="dropbox" width={110} className="globalObjectFit"></Image>
          <Image src={greenhouse} alt="greenhouse" width={120} className="globalObjectFit"></Image>
          <Image src={bbdo} alt="bbdo" width={80} className="globalObjectFit"></Image>
          <Image src={monday} alt="monday" width={130} className="globalObjectFit"></Image>
          <Image src={ncr} alt="ncr" width={100} className="globalObjectFit"></Image>
          <Image src={nyt} width="160" alt="nyt"className="globalObjectFit"></Image>
          <Image src={orange} width="130" alt="orange" className="globalObjectFit"></Image>
          <Image src={philips} alt="philips" width={110} className="globalObjectFit"></Image>
          <Image src={ted} alt="ted" width={67} className="globalObjectFit"></Image>
        </div>
      </div>
    </div>
  </section>
  )
}
