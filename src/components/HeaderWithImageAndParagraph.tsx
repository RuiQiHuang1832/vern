import React from "react";
import Image from "next/image";
import styles from "@/styles/HeaderWithImageAndParagraph.module.css";
import classNames from "classnames";
import { SectionType as HeaderProps }  from "@/global/sectionsData";

export default function HeaderWithImageAndParagraph({ header, paragraph, imageSrc, imageWidth, imageHeight, direction, id, sectionContainerClass }: HeaderProps) {
  
  const imageContainer: string = classNames("col-lg-6 col-12 my-4 d-flex justify-content-center");

  const headerText: string = classNames(styles["default-font-size"], "");

  return (
    <section style={{paddingTop:"10em", paddingBottom:"10em"}} className={`${sectionContainerClass} d-flex container`} id={id}>
      <div className={`${direction} flex-column align-content-center row mx-auto`}>
        <div   className={classNames("col-lg-6  col-12 d-flex align-items-center", direction == "flex-lg-row" ? "justify-content-md-start" : "justify-content-md-end", "order-1 order-lg-0", "justify-content-center")} >
          <div  className={`text-wrap-balance`}>
            <div>
            <h1 className={`${headerText} responsiveHeader mb-3`}>{header}</h1>
            <span style={{lineHeight:"1.6", fontSize:'22px'}} className="text-secondary fw-light">{paragraph}</span>
            </div>
          </div>
        </div>
        <div className={imageContainer}>
          <div className="image">
            <Image src={imageSrc} alt="Logo" width={imageWidth} height={imageHeight} quality={100} style={{borderRadius:"20%"}} className="globalObjectFit" />
          </div>
        </div>
      </div>

    </section>
  );
}
