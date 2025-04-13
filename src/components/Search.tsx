'use client'
import { MdSearch } from "react-icons/md";
import styles from "@/styles/Search.module.css";
import FuzzySearch from 'fuzzy-search';
import { useState } from "react";
import { searchable } from "@/global/table";
import { WEBSITE_NAME } from "@/global/global";
import searchImg from "@/assets/images/search.png"
import notFound from "@/assets/images/notFound.png"
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { GoTriangleDown, GoTriangleUp} from "react-icons/go";
import { MdKeyboardReturn } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';

export default function Search() {
  interface QueryType {
    section: string;
    link: string;
    text?: string;
    faq?: string;
    icon?:React.ReactNode;
    location:string;
  }

  const [query, setQuery] = useState<QueryType[]>([])
  const [input, setInput] = useState<string>("");

  
  const searcher = new FuzzySearch(searchable, ['section', 'link', 'desc' ,'keywords'], {
    caseSensitive: false,

  });

  const handleDelete = () => {
    setInput("")
    setQuery([])
  }
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
      },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const renderContent = () => {
    if (query.length == 0 && input == "") {
      return <><p className={styles["subtext"]}>Find anything about our product, search our links, and more.</p>
          <Image src={searchImg} alt="search" width={700} height={0}  className="item mt-5 globalObjectFit" quality={100}></Image>
      </>
    } else if (query.length == 0 && input != "") {
      return <div className={styles["subtext"]}>
        <p>Oops! We could not find any result for <span className="text-danger">&apos;<em>{input}</em> &apos;</span>.</p>
        <Image src={notFound} alt="search" width={400} height={0} className="item mt-3 globalObjectFit" quality={100}></Image>
        </div>
    } else {
      return (
        <>
          <div style={{ backgroundColor: "rgb(23,23,23)"  }} className={` d-flex flex-column rounded`}>
          <AnimatePresence>

            {query.map((e, i) => (
               <motion.div
               key={i}
               custom={i}
               className="result-item"
               variants={itemVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
             >
              <a href={`/${e.link}`} style={{animationDelay: `${i * 0.05}s`}} key={i} className={`${styles["results"]} `}>
                <div className={`${styles["results-icon"]}`}>{e.icon}</div>
                <div className="d-flex flex-column justify-content-center">
                  <div style={{ fontSize: "1rem" }}>{e.section}</div>
                  <div style={{ fontSize: "14px" }} className="text-secondary ">
                    {e.location}
                  </div>
                </div>
              </a>
                        </motion.div>

            ))}
            </AnimatePresence>
          </div>
          <div className={styles["legend-container"]}>
            <div className={styles["legend"]}>
              <GoTriangleDown className={styles["legend-icon"]}></GoTriangleDown>&nbsp;<GoTriangleUp className={styles["legend-icon"]}></GoTriangleUp>&nbsp;&nbsp;<span className="text-secondary">To navigate</span>
            </div>
            <div className={styles["legend"]}>
              <MdKeyboardReturn className={styles["legend-icon"]}></MdKeyboardReturn>&nbsp;&nbsp;<span className="text-secondary">To select</span>
            </div>
            <div className={styles["legend"]}>
              <IoExitOutline className={styles["legend-icon"]}></IoExitOutline>&nbsp;&nbsp;<span className="text-secondary">To dismiss</span>
            </div>
            <div className="ms-auto text-secondary">Results: <span className="text-white">{query.length}</span></div>
          </div>
        </>
      );
    }  
  }
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    let results = searcher.search(e.target.value)
    if (e.target.value.trim() == "") {
      results = []
    }
    setInput(e.target.value)
    setQuery(results)
  }
  return (
    <div className={`${styles["search-overlay"]}`}>
      <div style={{marginTop:"4rem"}} className="text-white container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-10 p-0">
            <div className={`input-group mb-3`} tabIndex={0}>
              <span className={`input-group-text pe-0 ps-3  ${styles["icon-container"]}`}>
                <MdSearch size="1.5em" className="text-white"></MdSearch>
              </span>
              <input type="text" onChange={handleSearch} value={input}  className={`form-control ${styles["light-border-input"]} ${styles["placeholder"]} py-3 border-start-0 ${input && `border-end-0`}`} placeholder={`Search ${WEBSITE_NAME}..`} />
              {input && <span style={{cursor:"pointer"}} onClick={handleDelete} className={`input-group-text ps-0 pe-3  ${styles["icon-container"]}`}>
                <IoMdClose size="1.5em" className="text-white"></IoMdClose>
              </span>}
            </div>
            <div style={{height:"80vh"}} className={`text-center overflow-auto  `}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
