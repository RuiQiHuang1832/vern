import Button from "./Button"
import { BsArrowRight } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import styles from "@/styles/Support.module.css"

export default function Support() {
  return (
    <div style={{ padding: "0rem 4rem" }}>
    <div style={{  margin: "2rem 0rem", borderRadius: "24px", fontSize: "30px", backgroundColor: "#1A1A1A", padding: "4rem" }} className="">
      <div className="mb-3" style={{ fontSize: "12px", color: "#949494" }}>
        CONTACT US &nbsp;<BiSupport style={{ transform: "translateY(-1px)" }}></BiSupport>
      </div>
      <div className="d-flex justify-content-between">
        <h1>Psst! Our team is here to help! 😊</h1>
        <div className="align-self-end">
          <Button buttonColor={{ cssColor: "#3C3C3C" }} href="https://airtable.com/appZ6rwp0wgPvNpjJ/pagfrOydoyfmz8qJe/form" width="auto" radius="10px" padding="11px" type="button" styleClass={`${styles["support-button"]}`}>
            Contact support
            <BsArrowRight className={`${styles["support-arrow"]}`} size="1em"></BsArrowRight>
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}
