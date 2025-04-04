"use client";
import React from "react";
import styles from "@/styles/Navigation.module.css";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import Search from "./Search";
import { WEBSITE_NAME } from "@/global/global";
import icon from "@/assets/images/icon.png"
import Image from "next/image";
import { Turn as Hamburger } from 'hamburger-react'

const navLinks = [
  // { text: "VIEW", href: "/playlist/view" },
  { text: "CREATE", href: "/playlist/create" },
  { text: "COMMUNITY", href: "/playlist/community" },
  { text: "SUPPORT", href: "https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" },
  { text: "LOG IN", href: "/login" },
];

type NavigationProps = {
  /* Optional. Use if you want to hide nav links */
  hidden?: boolean;
};
const BREAKPOINT = 1090

export default function Navigation({ hidden = false }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const pathname: string = usePathname();

  const mobileView = () => {
    return (
      <>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <li className={`nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`}>
              <div className="nav-link fs-5">
                <div className={`${styles["highlight-nav"]} ${classNames({
                    [styles["link-active"]]: pathname === link.href,
                  })}`}>
                  {link.text}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </>
    );
  };

  const desktopView = () => {
    return (
      <>{navLinks.map((link, index) => (
          <li key={index} className={`nav-item ${index === 3 ? "ms-auto" : ""} pt-2`}>
            <div className="nav-link fs-5">
              <Link
                className="text-decoration-none text-reset text-nowrap"
                href={link.href}
              >
                <div
                  className={`${styles["highlight-nav"]} ${classNames({
                    [styles["link-active"]]: pathname === link.href,
                  })}`}
                >
                  {link.text}
                </div>
              </Link>
            </div>
          </li>
        ))}
      </>
    );
  };

  const toggleView = () => {
    if (isMobile) {
      return isOpen ? mobileView() : <></>;
    }
    return desktopView();
  };
  
  const [isHovered, setIsHovered] = useState(false);

  const circleRef = useRef<HTMLDivElement | null>(null); // Ref for the rotating circle element
  const angleRef = useRef(0); // Store angle in a ref (no re-renders)
  const requestRef = useRef<number>(0); // Store animation frame ID

  // Animation loop
  const animate = React.useCallback(() => {
    if (!circleRef.current) return; // Safety check
    // Update angle based on hover state
    angleRef.current = isHovered 
      ? (angleRef.current + 1) % 360 
      : (angleRef.current - 0.2 + 360) % 360;
    // Apply rotation directly to the DOM element
    if (circleRef.current) {
      circleRef.current.style.transform = `rotate(${angleRef.current}deg)`;
    }
    // Continue animation loop
    requestRef.current = requestAnimationFrame(animate);
  }, [isHovered]);
  // Start/stop animation when `isHovered` changes
  useEffect(() => {
    cancelAnimationFrame(requestRef.current);
  
    // Start the animation loop
    requestRef.current = requestAnimationFrame(animate);
  
    // Cleanup function to cancel the animation frame when component unmounts or when isHovered changes
    return () => cancelAnimationFrame(requestRef.current);    
  }, [animate, isSearchOpen]);
  const searchOverlay = (): void => {
    setSearchOpen(!isSearchOpen);
    setIsHovered(false);
    console.log("searchOverlay", isSearchOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleResize = (): void => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= BREAKPOINT);
  };

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSearchOpen ? (
    <>
      <div onClick={searchOverlay} className={styles["search-close-btn"]}>
        <AiOutlineClose style={{ fontSize: "clamp(25px, 3vw, 40px)" }}color="white" />
      </div>
      <Search />
    </>
  ) : (
    <nav className={`navbar navbar-expand-custom `}>
      <div className={` ${!isMobile && styles["custom-column-gap"]} ${styles["custom-row-gap"]} container-fluid mt-3 px-sm-5 mx-3 ms-xxl-0 `}>
        {!hidden && (
          <div className={`nav-item me-auto ${styles["search"]}`}>
            <div className={`nav-link fs-5 me-xxl-5 pt-2 `}>
              <div onClick={searchOverlay}   onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="position-relative" >
                <div  className={`${styles["rotating-circle-container"]}`}>
              <div ref={circleRef} className={`${styles["rotating-circle"]}`}>
              <svg height="56" width="56" viewBox="0 0 56 56"><path d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"  fill="#F14243"></path><path d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z" fill="#45A3FE"></path><path d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"  fill="#F2CC42"></path></svg>
              </div>
              </div>
              <Image alt="icon" src={icon} width={40} height={40}></Image>
              </div>
            </div>
          </div>
        )}

        <a className={`navbar-brand fw-bold ms-xxl-3 ps-0 ps-md-2 pt-2`} href="/">
          <span className="brand">{WEBSITE_NAME}</span>
        </a>
  
          <div style={{visibility: hidden ? "hidden" : "visible", marginRight: isMobile ? "25px" : "0px"}} className="order-first pt-2">
          {/* <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button> */}
          {isMobile ?  <div  style={{border:"1px solid hsla(0, 0%, 25%, 1)", borderRadius:"9999px", width:"56px", height:"56px", display:"flex", justifyContent:"center", alignItems:"center"}} className={`ms-2 ${styles["hamburger-container"]}`}>
         
          <Hamburger label="Show menu" size={29}  easing="linear"  duration={0.1} color="#a1a1a1"  direction="right" toggled={isOpen} onToggle={() => document.body.classList.toggle("overflow-hidden")} toggle={setOpen}></Hamburger>
          </div> : <></>}
          </div>
              <div  style={{visibility: hidden ? "hidden" : "visible", flexGrow:isMobile ? "0" : "1"}}>
              <ul className={`navbar-nav mb-lg-0 flex-grow-1 ${styles["custom-column-gap"]} ${classNames({ [styles["navigation-overlay"]]: isOpen })}`}>
              {toggleView()}
                {!isMobile && <li  className="nav-item pt-2">
                  <div className={`nav-link fs-5 px-3 ${styles["try-button"]}`}>
                    <Link className="text-decoration-none text-reset text-nowrap" href="/login">
                      TRY FREE
                    </Link>
                  </div>
                </li>}
              </ul>
            </div>

   
      </div>
    </nav>
  );
}


