import { statsData } from "@/global/homeData";
import styles from "@/styles/Stats.module.css";
import Image from "next/image";
export default function Stats() {
    const NumberWithSpan = (str:string) => {
        const match = str.match(/^(\D*)(\d+)(\D*)$/);
       if (!match) {
        throw new Error("Input format is invalid"); // Handle cases where the input doesn't match the pattern
       }
        const prefix = match[1] ; // Non-digit prefix, e.g., "+"
        const digits = Number(match[2]); // Convert the digit part to a number
        const suffix = match[3] ; // Non-digit suffix, e.g., "%"
        const COLOR = "text-secondary"
        if (prefix) {
          return (<><span className={COLOR}>{prefix}</span>{digits}</>)
        }
        return (<>{digits}<span className={COLOR}>{suffix}</span></>)
      }
  return (
    <div style={{ paddingTop: "6rem" }} className={`${styles["stats-grid"]} pb-5`}>
    {statsData.map((e, i) => (
      <div key={i} className={`${styles["stats"]}`}>
        <div className="mb-3" style={{boxShadow:" 5px 5px 5px 0px rgba(0, 0, 0, 0.75)",backgroundColor:"#151515", borderRadius:'14px', padding:"1rem"}}>
            <Image priority src={e.icon} width={65} height={65} alt={"icon"} className={`item item-${i}`}></Image>
        </div>
        <h1 style={{ fontSize: "48px" }}>{NumberWithSpan(e.number)}</h1>
        <p className="fs-5 text-secondary">{e.description}</p>
      </div>
    ))}
  </div>
  )
}
