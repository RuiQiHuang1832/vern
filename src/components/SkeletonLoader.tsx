import styles from "@/styles/community-styles/Community.module.css";

export default function SkeletonLoader() {
  return (
    <section className={`${styles["grid"]} my-2`}>
      {Array.from({ length: 10 }).map((e, i) => {
        return (
          <div key={i} style={{ borderRadius: 0 }} className={`card bg-transparent text-white mt-3 ${styles["card-review-container"]} `}>
            <div className="placeholder-glow">
              <div className="placeholder" style={{ width: "317px", height: "177px", borderRadius: "10px 10px 0 0",backgroundColor:"grey" }}></div>
              </div>
            <div style={{ fontSize: "13px", maxHeight: "250px", minHeight: "250px" }} className="card-body  overflow-hidden">
                <div className="placeholder-wave">
              <span className="placeholder col-8"></span>
              </div>
              <div style={{ display: "flex", gap: "10px" }} className="placeholder-wave my-2 text-secondary">
                <span className="placeholder col-2 placeholder-xs"></span>
              </div>
              <div style={{ display: "flex", gap: "10px" }} className="placeholder-wave my-2 text-secondary">
                <span className="placeholder col-2 placeholder-xs"></span>
                <span className="placeholder col-3 placeholder-xs"></span>
              </div>
              <div style={{ display: "flex", gap: "10px" }} className="placeholder-wave mt-4 flex-wrap">
                <span className="placeholder col-8"></span>
                <span className="placeholder col-3"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-7"></span>
                <span className="placeholder col-5"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-7"></span>
                <span className="placeholder col-10"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-3"></span>
              </div>
            </div>
            <div style={{  background: "rgba(0,0,0,0.81)", borderRadius: "0 0 10px 10px" }} className=" px-3 py-1 position-relative pb-3">
              <div className={styles["fadeoff"]}></div>
                  <div style={{ display: "flex", gap: "10px" }} className="placeholder-wave mt-4 flex-wrap text-secondary">
              <span className="placeholder placeholder-xs col-2"></span>
              <span className="placeholder placeholder-xs col-3"></span>
              <span className="placeholder placeholder-xs col-1 ms-auto"></span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
