import Image from "next/image";
// import styles from "@/styles/HeaderWithImageAndParagraph.module.css";
import classNames from "classnames";
import { SectionType as HeaderProps }  from "@/global/sectionsData";
import FadeInElement from "./FadeInElement";

export default function HeaderWithImageAndParagraph({ header, paragraph, imageSrc, imageWidth, imageHeight, direction, id }: HeaderProps) {
  


  return (
    <section style={{paddingTop:"10em", paddingBottom:"10em", transition: 'all 0.5s ease-in-out'}} className={`col-lg-11 col-xl-9 col-10  d-flex mx-auto`} id={id}>
      <div  className={`${direction} flex-column align-content-center d-flex mx-auto `}>
        <div style={{flex:"1"}}  className={classNames("col-lg-7  col-12 d-flex align-items-center", direction == "flex-lg-row" ? "justify-content-md-start" : "justify-content-md-end", "order-1 order-lg-0", "justify-content-center")} >
          <div  className={`text-wrap-pretty`}>
            <div>
              <FadeInElement value="fade-in-section-left">
            <h1 className={`responsiveHeader mb-3`}>{header}</h1>
            </FadeInElement>
            <FadeInElement value="fade-in-section-left">

            <span style={{lineHeight:"1.6"}} className="mobile-font secondary fw-light item-1">{paragraph}</span>            </FadeInElement>

            </div>
          </div>
        </div>
        <div className="mx-3"></div>
        <div  style={{flex:"1"}} className="col-lg-6 col-12 my-4 d-flex justify-content-center">
        <FadeInElement value="fade-in-section">

          <div className="image">
            <Image src={imageSrc} alt="Logo" width={imageWidth} height={imageHeight} quality={100} style={{borderRadius:"20%"}} className="globalObjectFit" />
          </div>
          </FadeInElement>

        </div>
      </div>

    </section>
  );
}
