'use client';
import { useEffect, useState } from 'react';
import TypeOfMedia from './TypeOfMedia';
import MediaSelection from './MediaSelection';
import ProgressDashes from '@/components/ProgressDashes';
import styles from "@/styles/playlist-styles/Playlist.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import MediaReview from './MediaReview';
import Button from '@/components/Button';
export interface MediaData {
  id: number;
  mediaName: string;
  mediaPoster: string;
  mediaYear: number | undefined;
  overview: string;
  voteAverage: number;
  voteCount: number;
  genres: number[];
  imdb:string;
  trailer:string | undefined;
  tagline:string;
  cast:number;
  isPlaceholder:boolean;
}
const MAX_LIMIT: number = 8;

export default function MediaManager() {
    const [resetKey, setResetKey] = useState(0);


    const [currentComponent, setCurrentComponent] = useState<number>(1);
    //eg: [Anime, Movies, Shows..etc]
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    //For movies
    const [selectedTitles, setSelectedTitles] = useState<MediaData[]>([]);

    
    //When user selects a media type
    const handleMediaSelect = (selected:string|null) => {
      setSelectedMedia(selected);
    };
    //When user adds a title
    const handleTitleAdd = (data:MediaData[]) => {
      setSelectedTitles(data);
    }

 const setPlaceholder = () => {
  const now = Date.now();
  const placeholder: MediaData[] = Array.from({ length: MAX_LIMIT }, (_, i) => ({
    id: now + i,
    mediaName: "Placeholder",
    mediaPoster: "/placeholder.png",
    mediaYear: 0,
    overview: "",
    voteCount: 0,
    voteAverage: 0,
    genres: [],
    imdb: "",
    trailer: "",
    tagline: "",
    cast: 0,
    isPlaceholder: true,
  }));

  setSelectedTitles((prev) => {
    const combined = [...prev, ...placeholder];
    return combined.slice(0, MAX_LIMIT);
  });
};

    const components = [
    
      {
        title: 'What type of media are you reviewing for?',
        component: <TypeOfMedia selectedMedia={selectedMedia} onMediaSelect={handleMediaSelect} />,
      },
      {
        title: `Choose up to ${MAX_LIMIT} ${selectedMedia?.toLowerCase()} to review.`,
        component: <MediaSelection selectedMedia={selectedMedia} currentPage={currentComponent} selectedTitles={selectedTitles} onTitleAdd={handleTitleAdd} onClear={setSelectedTitles} MAX_LIMIT={MAX_LIMIT} onSetPlaceholder={setPlaceholder}  />,
      },
      {
        title: `Here you can review the ${selectedTitles.length} selected media.`,
        component: <MediaReview selectedTitles={selectedTitles} currentPage={currentComponent} />,
      },
      // Add more steps as needed
    ];

   const handleContinue = () => {
    if (selectedMedia != null) {
      setCurrentComponent((prev) => prev + 1)
    }
    scrollToTop();
   }

   const handleBack = () => {
     //Should only reset when user is on the 2nd page.
     if (currentComponent == 2) {
       //states managed by parent that need to be reset go here:
       //MediaSelection reset
       if (!selectedTitles[0].isPlaceholder) {
         setSelectedTitles([]);
       }
       
       //handles reset for states managed by child
       setResetKey(() => Date.now());
     }

     //<- back
     setCurrentComponent((prev) => prev - 1);
   };

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling, use 'auto' for instant scrolling
    });
  }

 

useEffect(() => {
  if (selectedTitles.length === 0) {
   setPlaceholder(); //initializes the placeholder
  }
}, [selectedTitles]);


  return (
    <>
  <ProgressDashes progressContainerClassName={"container"} length={3} current={currentComponent}></ProgressDashes>
  
  <Swiper navigation={{ nextEl: ".continue", prevEl: ".back" }}  modules={[Navigation]} speed={1000} allowTouchMove={false} draggable={false}  simulateTouch={false}  watchSlidesProgress={true} slidesPerView={1} spaceBetween={100}>
    {components.map((c,index) => (
        <SwiperSlide key={index}>
    <div key={resetKey} className="container">
      <h2 className="my-4 fw-light">{c.title}</h2>
      {c.component}
      </div>
      </SwiperSlide>
    ))}
        <div style={{marginTop:"5rem"}} className="text-end container">
        <Button buttonColor={{ cssColor: "white" }} eventOnClick={handleBack} type="submit" width="auto" radius="10px" padding="10px" styleClass={` ${styles["nav-back"]} btn me-3 back`}>
<span style={{ color: "black" }}>Back</span></Button>
    {
    currentComponent === components.length 
    ?   <Button buttonColor={{ cssColor: "white" }} eventOnClick={handleBack} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["nav-next"]}`}>
<span style={{ color: "black" }}>Submit</span></Button>
    : <Button buttonColor={{ cssColor: "white" }} eventOnClick={handleContinue} type="submit" width="auto" radius="10px" padding="10px" styleClass={`${styles["nav-next"]} ${selectedMedia == null ? styles["disabled_swiper_button"] : ""} ${currentComponent == 2 && selectedTitles[0]?.isPlaceholder ? styles["disabled_swiper_button"] : ""}  btn continue`}><span style={{ color: "black" }}>Continue</span></Button>
    }
    
    </div>
      </Swiper>
    </>
  )
}


