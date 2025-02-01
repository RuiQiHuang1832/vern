import { useState, useEffect } from "react";
import styles from "@/styles/ScrollProgressBar.module.css";



export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress: () => void = () => {
      const startHeight = 0
      const scrollableHeight: number = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll: number = window.scrollY;
      const progress: number = (currentScroll / scrollableHeight) * (startHeight + 100);
      setScrollProgress(progress - startHeight);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  const position = [0,4, 10, 26, 54, 61, 70, 85, 95] //scrollProgress
  const activeIndex = position.findIndex((value, index) => scrollProgress >= value &&
      (index === position.length - 1 || scrollProgress < position[index + 1])
  );
  return (
    <div className={styles["scroll-container"]}>
      <div className="wrapper">
        {position.map((_, index): React.ReactNode => (
            <div className={`${styles["item-container"]} ${index == activeIndex  ?styles["item-active"] : ""}`} key={index}>
              <span className={styles["item"]}>
              </span>
            </div>
          )
        )}
        </div>
    </div>
  );
}
