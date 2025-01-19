import styles from "@/styles/PointingArrow.module.css";
export default function PointingArrow() {
  return (
    <div className={`${styles["arrows-container"]} arrows d-none d-xl-block`}>
      <div style={{ left: "29%", transform: "rotate(30deg)" }} className={`position-absolute ${styles["arrow"]}`}>
        <svg width="185" height="36" viewBox="0 0 185 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}
