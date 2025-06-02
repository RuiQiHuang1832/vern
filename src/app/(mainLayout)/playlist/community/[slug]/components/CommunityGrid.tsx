import styles from "@/styles/community-styles/Community.module.css";
import PaginatedItems from "@/components/PaginatedItems";
import horizon from "@/assets/images/horizon.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Tab } from "../hooks/useTabs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import Sparks from "@/components/Sparks";
import { FaEllipsis,FaThumbsUp } from "react-icons/fa6";
import { MdFileUpload } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { IoBook } from "react-icons/io5";

type DataItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function displayData(data: DataItem[]) {
  return (
    <section className={`${styles["grid"]} my-2`}>
      {data &&
        data.map((e: DataItem, i) => {
          return (
            <div key={i} style={{ borderRadius: 0 }} className={`card bg-transparent text-white mt-3 ${styles["card-review-container"]} `}>
              <figure style={{ zIndex: "2" }} className={`mb-0 ${styles["figure"]}`}>
                <div className={`${styles["extra-button"]}`}>
                  <FaEllipsis size="1.2rem" color="white"></FaEllipsis>
                </div>
                <Image style={{ borderRadius: "10px 10px 0 0" }} priority={true} src={horizon.src} width={500} height={560} quality={100} alt="iag" className={` ${styles["object-fit"]} `}></Image>
              </figure>
              <div style={{ fontSize: "13px", maxHeight: "250px", minHeight: "250px", background: "rgb(0 0 0 / 26%)", zIndex: "1" }} className="card-body  overflow-hidden ">
                <h5 style={{ fontSize: "16px" }} className={`card-title mt-3 ${styles["title"]}  hover-underline d-flex justify-content-between align-items-center`}>
                  {e.title}
                </h5>

                <div className="info">
                  <div className="text-secondary d-flex align-items-center">
                    <IoBook></IoBook>&nbsp;<div className="hover-underline">Movies</div>
                  </div>
                  <div style={{ gap: "5px" }} className="text-secondary d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <IoPersonSharp></IoPersonSharp>&nbsp;
                      <div className="hover-underline">Nukem</div>
                    </div>
                    <BsDot></BsDot>
                    <div className="d-flex align-items-center">
                      <MdFileUpload size="1rem"></MdFileUpload>
                      <div title="Uploaded on April 01, 2025 at 4:23 PM PST">&nbsp;01 Apr 2024</div>
                    </div>
                  </div>
                </div>
                <p className={`card-text pt-3 ${styles["multiline-ellipsis"]}`}>{e.body}</p>
              </div>
              <div style={{ columnGap: "12px", fontSize: "13px", background: "rgba(0,0,0,0.81)", borderRadius: "0 0 10px 10px" }} className="d-flex data px-3 py-1  position-relative align-items-center">
                <div className={styles["fadeoff"]}></div>
                <div style={{ height: "1rem", backgroundColor: "white", width: "3px" }}></div>
                <div className="d-flex align-items-center ">
                  <FaThumbsUp color=""></FaThumbsUp>&nbsp;244
                </div>
                <div className="d-flex align-items-center">
                  <BsFillBookmarkCheckFill color=""></BsFillBookmarkCheckFill>&nbsp;13.5k
                </div>
                <Sparks></Sparks>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default function CommunityGrid(props: { tab: Tab; pagination: boolean; setLoadState: React.Dispatch<React.SetStateAction<boolean>>, setResultLength?: React.Dispatch<React.SetStateAction<number>>, itemsPerPage: number }) {
  const pageParams = useSearchParams();
  const pageNumber = parseInt(pageParams.get("page") ?? "1");
  return <PaginatedItems setResultLength={props.setResultLength} url={`http://localhost:3001/${props.tab.id}`} itemsPerPage={props.itemsPerPage} setLoad={props.setLoadState} showPages={props.pagination} currentPage={pageNumber} displayFunction={displayData}></PaginatedItems>;
}
