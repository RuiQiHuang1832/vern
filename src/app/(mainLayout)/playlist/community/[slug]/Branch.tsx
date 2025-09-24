"use client";
import CommunityGrid from "./components/CommunityGrid";
import "@/styles/community-styles/framer-tabs.css"
import "@/styles/community-styles/community.css"
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Tab } from "./hooks/useTabs";
import styles from "@/styles/community-styles/Community.module.css";


// import styles from "@/styles/community-styles/Branch.module.css"

type CommunityProps = {
  pagination: boolean;
  tab: Tab
};
// when user clicks view more
export default function Branch(props: CommunityProps) {
  const [selectItems, setSelectItems] = useState("0");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [, setIsLoading] = useState<boolean>(true)
  const [resultLength, setResultLength] = useState<number>(0);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, label:string) => {
    setSelectItems(e.target.value);
    if (label == "items") {
      setItemsPerPage(+e.target.value);
    }
    
    router.push(pathname + "?" + createQueryString(label, e.target.value));
  };

  return (
    <div className="text-white my-5 mx-auto container position-relative">
     <section className={`d-flex ${styles["community-banner"]} align-items-center rounded`}></section>
    {/* {isLoading && <> <h1>{props.tab.title}</h1> may need this flag*/}
    {<> <h1>{props.tab.title}</h1> 
    <p className="secondary">Browse the communities best reviews</p>
    <hr></hr>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="fs-5">
   {resultLength} results</div>
<div className="d-flex gap-3">
        <div>
        <select className={`${styles["form-select"]}  `} value={selectItems}  onChange={(e) => handleChange(e,"time")}>
          <option value="0">All time</option>
          <option value="1">24 hrs</option>
          <option value="7">7 days</option>
          <option value="14">14 days</option>
          <option value="30">30 days</option>
          <option value="365">1 year</option>
        </select>
        </div>
        <div>
        <select className={`${styles["form-select"]}  `} value={itemsPerPage} onChange={(e) => handleChange(e,"items")}>
          <option value={4}>4 items</option>
          <option value={8}>8 items</option>
          <option value={16}>16 items</option>
          <option value={20}>20 items</option>
        </select>
        </div>
        <div>
        <select className={`${styles["form-select"]}  `} value={selectItems} onChange={(e) => handleChange(e,"display")}>
          <option value="tiles">Tiles</option>
          <option value="list">List</option>
        </select>
        </div>
        </div>
      </div></>} 
        <CommunityGrid itemsPerPage={itemsPerPage} tab={props.tab} setResultLength={setResultLength} pagination={props.pagination} setLoadState={setIsLoading}></CommunityGrid>
     </div>
  );
}
