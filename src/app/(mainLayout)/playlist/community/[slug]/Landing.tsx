/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CommunityGrid from "./components/CommunityGrid";
import horizon from "@/assets/images/horizon.png";
import horizon2 from "@/assets/images/horizon2.png";
import horizon3 from "@/assets/images/horizon3.png";
import horizon4 from "@/assets/images/horizon4.png";
import horizon5 from "@/assets/images/horizon5.png";

import Image from "next/image";
import styles from "@/styles/community-styles/Community.module.css";
import Link from "next/link";
import { useState } from "react";
import { Framer } from "./components/framer";
import { useTabs } from "./hooks/useTabs";
import "@/styles/community-styles/framer-tabs.css"
import "@/styles/community-styles/community.css"
import { dataTabs } from "@/global/tabs";
import { BsBookmarks } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import Button from "@/components/Button";
import { BsArrowRight } from "react-icons/bs";
import { PiFireLight } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa6";

 type CommunityProps = {
  params: { slug:string }
  pagination: boolean
}
// /community
export default function Landing(props:CommunityProps) {
  const [hookProps] = useState(dataTabs);
  //params {id: 1} is being passed in from the navigation component
  const [active, setActive] = useState("Latest");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [matchingObject, setMatchingObject] = useState(hookProps.tabs[2]);
  const handleTabClick  = (id:string) => {
    setActive(id);
    setMatchingObject(hookProps.tabs.find(tab => tab.id === id) ?? hookProps.tabs[2])
  }


  const framer = useTabs(hookProps);
  return (
    <div className="text-white my-5 mx-auto container p-0">
      <div className="">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <h1 className="mb-3">Community Reviews</h1>
            <div style={{ gap: "1rem" }} className="d-flex align-items-center">
              <span style={{ fontSize: "14px" }} className="ms-1">
                <span className="hover-underline">Reviews</span> <span style={{ opacity: "50%" }}>2.5k</span>
              </span>
              <div style={{ borderRight: "1px solid hsla(0, 0.00%, 100.00%, 0.30)", alignSelf: "stretch" }}></div>
              <span style={{ fontSize: "14px" }} className="ms-1">
                <span className="hover-underline">Collections</span> <span style={{ opacity: "50%" }}>88</span>
              </span>
              <div style={{ borderRight: "1px solid hsla(0, 0.00%, 100.00%, 0.30)", alignSelf: "stretch" }}></div>
              <span style={{ fontSize: "14px" }} className="ms-1">
                <span className="hover-underline">Media</span> <span style={{ opacity: "50%" }}>1.3k</span>
              </span>
            </div>
          </div>
          <div style={{ border: "2px solid transparent", borderRadius: "9999px", background: "black" }} className="d-flex align-items-center p-3">
            <BsBookmarks size="1.8rem"></BsBookmarks>
          </div>
        </div>
              <div className="d-flex justify-content-between align-items-center mt-5">
        <div style={{ gap: "0.5rem" }} className="d-flex align-items-center mb-2">
          <PiFireLight size="2rem"></PiFireLight>
          <h3 className="fw-normal mb-0">Trending Reviews</h3>
        </div>
        <div className="mb-2 hover-underline" style={{ fontSize: "16px", alignSelf: "end" }}>
          View All
        </div>
      </div>
      <hr></hr>
        <section className={`d-flex ${styles["community-banner"]} align-items-center rounded`}>
          {/* <div className="w-50 text-center fs-2 fw-normal">Join the largest review community!</div>
        <div className="d-flex flex-column align-items-center w-50">
          <div className="px-5 py-2 bg-success mb-3 rounded">Register</div>
          <div>
            Already have an account?{" "}
            <Link className="text-decoration-none" href="/login">
              Log in here
            </Link>
          </div>
        </div> */}
        </section>
        <div style={{ columnGap: "16px", }} className={`d-flex flex-wrap `}>
          {Array.from({ length: 2 }).map((e, i) => (
            <div key={i} style={{ flex: "1 0 calc(50% - 8px)" }} className={`${styles["big-frame"]} my-2 position-relative`}>
              <div className={styles["fadeoff-huge"]}></div>

              <div className=" w-100" style={{ position: "absolute", bottom: "0", left: "0" }}>
                <div className="p-3  " style={{ borderRadius: "10px", fontSize: "13px" }}>
                  <h5 className="hover-underline">Cinematic ReShade</h5>
                  <div style={{gap:"5px"}} className="d-flex align-items-center mb-2">
                    <div className="hover-underline">By mrBulived</div>
                    <div>|</div>
                    <FaThumbsUp></FaThumbsUp>244
                    </div>
                     <div>This ReShade lower the color saturation and vibrance adding a new cinematic experience. Lower random color contamination, and adds real night.</div>
                </div>
              </div>

              <Image style={{ borderRadius: "11px" }} src={[horizon.src, horizon2.src][i]} alt="Home page logo" width={0} height={0} sizes="100vw" className={` h-100 w-100`} priority={true} quality={100} />
            </div>
          ))}
          {Array.from({ length: 4 }).map((e, i) => (
            <div key={i} style={{ flex: "1 0 0" }} className={` my-2 position-relative ${styles["big-frame"]}`}>
              <div className={styles["fadeoff-huge"]}></div>

              <div className=" w-100" style={{ position: "absolute", bottom: "0", left: "0" }}>
                <div className="p-3 " style={{ borderRadius: "10px", background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgb(4 4 4 / 75%) 100%)", fontSize: "13px" }}>
                  <h6 className="hover-underline">Cinematic ReShade</h6>
                 <div style={{gap:"5px"}} className="d-flex align-items-center">
                    <div className="hover-underline">By mrBulived</div>
                    <div>|</div>
                    <FaThumbsUp></FaThumbsUp>244
                    </div>
                </div>
              </div>
              <Image style={{ borderRadius: "10px" }} src={[horizon.src, horizon2.src, horizon3.src, horizon4.src, horizon5.src][i]} alt="Home page logo" width={0} height={0} sizes="100vw" className={`h-100 w-100`} priority={true} quality={100} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <div style={{ gap: "0.5rem" }} className="d-flex align-items-center mb-2">
          <GoStack size="2rem"></GoStack>
          <h3 className="fw-normal mb-0">More Reviews</h3>
        </div>
        <div className="mb-2 hover-underline" style={{ fontSize: "16px", alignSelf: "end" }}>
          Explore All Reviews
        </div>
      </div>
      <hr></hr>
      <div className={`nav nav-tabs ${styles["tab-container"]}`}>
        <Framer.Tabs {...framer.tabProps} onTabClick={handleTabClick} />
      </div>
      <CommunityGrid itemsPerPage={16} tab={matchingObject} pagination={props.pagination} setLoadState={setIsLoading}></CommunityGrid>
      <div className="mt-5 text-center">
        <Button buttonColor={{ cssColor: "white" }} type="submit" width="auto" radius="10px" padding="10px" href={`/playlist/community/${matchingObject.slug}/?page=1`} styleClass={`${styles["more-button"]}`}>
          <span style={{ color: "black" }}>View More</span>
          <BsArrowRight className={`${styles["more-arrow"]}`} color="black" size="1em"></BsArrowRight>
        </Button>
      </div>
    </div>
  );
  
}

