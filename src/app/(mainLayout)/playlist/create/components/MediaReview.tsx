import React from "react";
import { MediaData } from "./MediaManager";
import Image from "next/image";
import styles from "@/styles/playlist-styles/Playlist-MediaReview.module.css";
import { FaStar } from "react-icons/fa";
import { kFormatter } from "@/helpers/numberFormatter";
// import { PiUserCircleFill } from "react-icons/pi";
// import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import classNames from "classnames";
import { MdAccessTimeFilled } from "react-icons/md";
import { BiSolidUpvote } from "react-icons/bi";

interface MediaReviewProps {
  selectedTitles: MediaData[];
  currentPage: number;
}
interface reviewStateType {
  [key: number]: boolean;
}

export default function MediaReview(props: MediaReviewProps) {
  const [isReviewOpen, setIsReviewOpen] = useState<reviewStateType>({});

  const toggleReviewDropdown = (e: React.MouseEvent, key: number): void => {
    setIsReviewOpen((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key] || false,
    }));
  };
  //For review container + accordion
  const containerClassName = classNames("col-md-12");

  return (
    <div className={` mt-5 ${props.currentPage <= 2 ? "d-none" : ""}`}>
      <div className="">
        <div className="form-floating">
          <input type="email" required className={`form-control light-border-input`} id="floatingInput" placeholder="name@example.com" />
          <label className="bg-transparent fw-light">Title</label>
        </div>
        <br></br>
        <div className="form-floating">
          <textarea style={{ height: "100px", resize: "block" }} className={`form-control light-border-input`} required placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label className="bg-transparent fw-light">Description</label>
        </div>
      </div>
      <div className="row ">
        {props.selectedTitles.map((title) =>
          title.isPlaceholder ? (
            ""
          ) : (
            <div className={`${containerClassName}  `} key={title.id}>
              <div className={`d-flex mt-4 ${styles["review-container"]}  align-items-center  justify-content-sm-start justify-content-center ${containerClassName}`}>
                   {/* <IoMdArrowDropright key={title.id} onClick={(e: React.MouseEvent) => toggleReviewDropdown(e, title.id)} className={`${classNames(styles["dropdown-review-arrow"], { [styles["rotate"]]: isReviewOpen[title.id] })}`} color="white" size="2.5rem"></IoMdArrowDropright> */}
                <div style={{cursor:"pointer"}} onClick={(e: React.MouseEvent) => toggleReviewDropdown(e, title.id)} className={` ${styles["poster-container"]} ps-sm-5`}>
                  <Image title="Open to review" className={`rounded  ${styles["image-container"]}`} alt="movie pic" width="0" height="0" sizes="100vw" style={{width:"200px", height:"auto"}} src={`https://image.tmdb.org/t/p/original/${title.mediaPoster}`}></Image>
                  <div className="d-flex flex-column text-primary">
                    
                    {/* <span className={`${classNames("text-center mt-4", { "text-danger": !title.tagline })} `}>{title.tagline || ""}</span> */}
                    {/* <IoMdArrowDropright  key={title.id} onClick={(e: React.MouseEvent) => toggleReviewDropdown(e, title.id)} className={`${classNames(styles["dropdown-review-arrow"], { [styles["rotate"]]: isReviewOpen[title.id] })} d-block d-md-none mx-auto`} color="white" size="2.5em"></IoMdArrowDropright> */}
                  </div>
                </div>
                <div className={`pt-4 pb-5 pe-5 position-relative col-xl-8 col-lg-8 col-7 d-sm-block d-none ps-5`}>
                  {/* <h4 className={`${styles["numbered-circle"]}`}>{i + 1}</h4> */}
                  <h2>
                    <a className={`${styles["imbd-link"]}`} target="_blank" href={`https://www.imdb.com/title/${title.imdb}/`}>
                      {title.mediaName}
                    </a>
                  </h2>
                  <div className={`${styles["genres"]} text-nowrap my-4`}>
                  {title.genres.slice(0, 3).map((e) => {
                    return (
                      <span key={e} className={`px-2 py-1  me-2`} style={{backgroundColor:"#121212" ,borderRadius:"5px", fontSize:"0.8rem"}}>
                        {e}
                      </span>
                    );
                  })}</div>
                  <p className={`${styles["multiline-ellipsis"]} fw-light mt-3`}>{title.overview}</p>
                  <div className="d-flex align-items-end">
                    <div>
                      <FaStar color="yellow"></FaStar>&nbsp;<span className="align-middle">{title.voteAverage}</span>
                    </div>
                    <div className="d-flex align-items-center mx-5" >
                      <MdAccessTimeFilled></MdAccessTimeFilled>&nbsp;<span>{title.mediaYear}</span>
                    </div>
                    <div className="d-flex align-items-center ">
                      <BiSolidUpvote color="#ff4500"></BiSolidUpvote>&nbsp;<span>{kFormatter(title.voteCount)}</span>
                    </div>
                  </div>
                  {/* <div className="my-4">
                    <div className="d-flex">
                      {Array.from({ length: title.cast }).map((e, i) => (
                        <PiUserCircleFill key={i} className="text-secondary" size="3em"></PiUserCircleFill>
                      ))}
                    </div>
                  </div> */}
                  {/* <button type="button" className={`btn  ${title.trailer == undefined ? "btn-danger" : "btn-primary"} border-0 p-3`}>
                    <a className="text-decoration-none text-white fw-light" target="_blank" href={`${title.trailer == undefined ? `https://www.google.com/search?q=${encodeURIComponent(title.mediaName).replace(/%20/g, "+").replace(/%3A/g, ":")}` : `https://www.youtube.com/watch?v=${title.trailer}/`}`}>
                      {title.trailer == undefined ? "Trailer Not Found" : "View Trailer"}
                    </a>
                  </button> */}
                </div>
              </div>
              <div className={`${styles["review-container-accordion"]} ${containerClassName} ${styles["accordion-content"]} ${classNames({ [styles["active"]]: isReviewOpen[title.id] })}`}>
                <div className="d-flex flex-column p-3">
                  <hr className="mx-4"></hr>
                  <div className="text-center align-self-center fw-light">
                    Write a review · {title.mediaName} ({title.mediaYear})
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className={`${styles["rate"]}`}>
                      {[5, 4, 3, 2, 1].map((value, i) => (
                        <React.Fragment key={i}>
                          <input type="radio" id={`star${value}-${title.id}`} name={`${title.id}`} value={value} />
                          <label htmlFor={`star${value}-${title.id}`} title={`${value} Star`}>
                            {value} stars
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="align-self-center">
                      <span className="text-white fw-light">Posting as Ben</span>
                    </div>
                  </div>
                  <textarea placeholder="Your feedback helps others decide which movies to watch." className={`mt-3 form-control light-border-input ph-color-white`} maxLength={3000} rows={9}></textarea>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
