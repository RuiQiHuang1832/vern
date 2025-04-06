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
import icon from "@/assets/images/icon.png";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";

const navLinks = [
  // { text: "VIEW", href: "/playlist/view" },
  { text: "Create", href: "/playlist/create" },
  { text: "Community", href: "/playlist/community" },
  { text: "Support", href: "https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" },
  { text: "Log In", href: "/login" },
];

type NavigationProps = {
  /* Optional. Use if you want to hide nav links */
  hidden?: boolean;
};

export default function Navigation({ hidden = false }: NavigationProps) {
  const isMobile = useMediaQuery({ query: `(max-width: 1090px)` }); // Mobile if screen width is <= 1090px
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const pathname: string = usePathname();

  const [isHovered, setIsHovered] = useState(false);

  const circleRef = useRef<HTMLDivElement | null>(null); // Ref for the rotating circle element
  const angleRef = useRef(0); // Store angle in a ref (no re-renders)
  const requestRef = useRef<number>(0); // Store animation frame ID


  // Animation loop
  const animate = React.useCallback(() => {
    if (!circleRef.current) return; // Safety check
    // Update angle based on hover state
    angleRef.current = isHovered ? (angleRef.current + 1) % 360 : (angleRef.current - 0.2 + 360) % 360;
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


  return isSearchOpen ? (
    <>
      <div onClick={searchOverlay} className={styles["search-close-btn"]}>
        <AiOutlineClose style={{ fontSize: "clamp(25px, 3vw, 40px)" }} color="white" />
      </div>
      <Search />
    </>
  ) : (
    <nav className={`navbar navbar-expand-custom `}>
      <div style={{paddingTop:"2rem", paddingBottom:"2rem"}} className={` ${!isMobile && styles["custom-column-gap"]} ${styles["custom-row-gap"]} container-fluid px-sm-5 ms-xxl-0 `}>
        {!hidden && (
          <div className={`nav-item me-auto ${styles["search"]}`}>
            <div className={`nav-link fs-5 me-xxl-5 pt-2 `}>
              <div onClick={searchOverlay} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="position-relative">
                <div className={`${styles["rotating-circle-container"]}`}>
                  <div ref={circleRef} className={`${styles["rotating-circle"]}`}>
                    <svg height="56" width="56" viewBox="0 0 56 56">
                      <path d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z" fill="#F14243"></path>
                      <path d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z" fill="#45A3FE"></path>
                      <path d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z" fill="#F2CC42"></path>
                    </svg>
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

        <div style={{ visibility: hidden ? "hidden" : "visible", marginRight: isMobile ? "25px" : "0px" }} className="order-first pt-2">
          <div className={`${styles["rounded-button"]} ${styles["hamburger-container"]}`}>
            <Hamburger label="Show menu" size={29} easing="linear" duration={0.1} color="#a1a1a1" direction="right" toggled={isOpen} onToggle={() => document.body.classList.toggle("overflow-hidden")} toggle={setOpen}></Hamburger>
          </div>
        </div>
        <div className={`${styles["desktop-view"]}`} style={{ visibility: hidden ? "hidden" : "visible", }}>
          <ul className={`navbar-nav mb-lg-0 flex-grow-1 ${styles["custom-column-gap"]}`}>
            {navLinks.map((link, index) => (
              <li key={index} className={`nav-item ${index === 3 ? "ms-auto" : ""} pt-2`}>
                <div className="nav-link fs-5">
                  <Link className="text-decoration-none text-reset text-nowrap" href={link.href}>
                    <div className={`${styles["highlight-nav"]} ${classNames({[styles["link-active"]]: pathname === link.href})}`}>
                      {link.text}
                    </div>
                  </Link>
                </div>
              </li>
            ))}
            <li className="nav-item pt-2">
              <div className={`nav-link fs-5 px-3 ${styles["try-button"]}`}>
                <Link className="text-decoration-none text-reset text-nowrap" href="/login">
                  TRY FREE
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {isOpen && <div className={`${styles["mobile-view"]}`} style={{ visibility: hidden ? "hidden" : "visible", }}>
          <div className={`navbar-nav mb-lg-0 flex-grow-1 ${styles["custom-column-gap"]} ${styles["navigation-overlay"] }`}>
          {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className={`nav-item dropdown ${styles["nav-dropdown-menu"]} ${styles["hover-dropdown"]}`}>
              <div className="nav-link fs-5">
                <div
                  className={`${styles["highlight-nav"]} ${classNames({
                    [styles["link-active"]]: pathname === link.href,
                  })} ${styles["hamburger-link"]}`}
                >
                  {link.text}
                </div>
              </div>
            </div>
          </Link>
        ))}
          </div>
        </div>} 
      </div>
    </nav>
  );
}
