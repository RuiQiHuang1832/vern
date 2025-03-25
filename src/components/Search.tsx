'use client'
import { MdSearch } from "react-icons/md";
import styles from "@/styles/Search.module.css";
import FuzzySearch from 'fuzzy-search';
import { useState } from "react";
import { searchable } from "@/global/table";
import { WEBSITE_NAME } from "@/global/global";
import searchImg from "@/assets/images/search.png"
import notFound from "@/assets/images/notFound.png"
import { MdOutlineChevronRight } from "react-icons/md";
import Image from "next/image";
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

  const renderContent = () => {
    if (query.length == 0 && input == "") {
      return <><p className={styles["subtext"]}>Find anything about our product, search our links, and more. Enter a query in the search input above, and results will be displayed as you type.</p>
          <Image src={searchImg} alt="search" width={700} height={0}  className="item mt-5 globalObjectFit" quality={100}></Image>
      </>
    } else if (query.length == 0 && input != "") {
      return <div className={styles["subtext"]}>
        <p>Oops! We could not find any result for <span className="text-danger">&apos;<em>{input}</em> &apos;</span>.</p>
        <Image src={notFound} alt="search" width={400} height={0} className="item mt-3 globalObjectFit" quality={100}></Image>
        </div>
    } else {
      return (
        <div style={{backgroundColor:"rgb(23,23,23)"}} className="d-flex flex-column p-3 rounded">
        {query.map((e,i) => (
          <a  
          href={`/${e.link}`} 
          key={i} 
          className={`${styles["results"]}`}> 
          <div className={styles["results-icon"]}>{e.icon}</div>
         <div >{e.section} <MdOutlineChevronRight></MdOutlineChevronRight> {e.location}</div>
         </a>))}
         </div>
         )
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
          <div className="col-md-9 col-11">
            <div className={`input-group mb-3`} tabIndex={0}>
              <span className={`input-group-text pe-0  ${styles["icon-container"]}`}>
                <MdSearch size="1.5em" className="text-white"></MdSearch>
              </span>
              <input type="text" onChange={handleSearch} className={`form-control ${styles["light-border-input"]} ${styles["placeholder"]} py-3 border-start-0`} placeholder={`Search ${WEBSITE_NAME}..`} />
            </div>
            <div style={{height:"80vh"}} className="text-center overflow-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
