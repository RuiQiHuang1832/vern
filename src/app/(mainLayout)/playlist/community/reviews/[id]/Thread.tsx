import styles from "@/styles/community-styles/Thread.module.css";
import Image from "next/image";
import horizon from "@/assets/images/away.jpg";
import { GoStarFill } from "react-icons/go";

const TEMP_DATA = [
  {
    id: 1,
    title: "Inception (2016)",
    body: "Nolan really went all out with the visuals and concept. The idea of dreams within dreams felt fresh and intense.",
  },
  {
    id: 2,
    title: "The Shawshank Redemption (2016)",
    body: "A slow, deliberate masterpiece. It shows the power of hope in the most oppressive conditions. Beautifully acted.",
  },
  {
    id: 3,
    title: "The Godfather (2016)",
    body: "Masterclass in storytelling. The mood, the pacing, the characters — it's hard to top this film in any category.",
  },
  {
    id: 4,
    title: "Spirited Away (2001)",
    body: "A magical film that completely immersed me in another world. The animation, characters, and music all work together to create something unforgettable. It's one of those rare films that feels like it's speaking directly to your imagination.",
  },
  {
    id: 5,
    title: "Parasite (2019)",
    body: "Wild ride. I went in blind and I'm so glad I did. It twists and turns and keeps you guessing. The social commentary hits hard, but it's never preachy.",
  },
  {
    id: 6,
    title: "Interstellar (2014)",
    body: "Some parts dragged, but the visuals and emotional weight really delivered. The black hole scenes alone are worth the watch. Plus, that Hans Zimmer score? Incredible.",
  },
  {
    id: 7,
    title: "The Dark Knight (2008)",
    body: "Heath Ledger as the Joker was next-level. I’ve rewatched this more times than I can count and it never gets old.",
  },
  {
    id: 8,
    title: "Arrival (2016)",
    body: "The kind of sci-fi I love — emotional, slow-building, and thought-provoking. That ending had me staring at the wall for a while.",
  },
  {
    id: 9,
    title: "Her (2013)",
    body: "Weird concept but deeply human. The mix of loneliness and connection hit home. Joaquin Phoenix nailed it.",
  },
  {
    id: 10,
    title: "Everything Everywhere All at Once (2022)",
    body: "Absolutely bonkers in the best way. Somehow managed to be hilarious, heartfelt, chaotic, and philosophical all at once. I was laughing and crying, sometimes at the same time. Still can't believe it exists — and I mean that as a compliment.",
  },
];

export default function Thread() {
  return (
    <div className="text-white container my-5">
      <div className=" col-10">
    <div className="mb-4 text-secondary">Movies</div>
      <h1 className="">My Top 10 Favorite Movies Of All Time!</h1>
      <p className="text-secondary my-4">
        <span style={{color:"orange"}} className="text-decoration-underline">Ben Huang</span> • Posted on December 22, 2025
      </p>
      <p className="text-secondary">Here are some of the greatest films of all time — at least in my book. These are the movies that left a mark on me, whether through unforgettable characters, masterful storytelling, or moments that still linger in my head years later. Some made me laugh out loud, others made me cry (even if I didn’t admit it at the time), and a few completely changed how I see the world. This list isn’t just about technical brilliance — it’s about the emotional impact, the nostalgia, and those rare scenes that made me pause and think, “Damn… that was perfect.” Everyone’s got their own personal canon, and this is mine.</p>
      <p className="text-secondary">Here are some of the greatest films of all time — at least in my book. These are the movies that left a mark on me, whether through unforgettable characters, masterful storytelling, or moments that still linger in my head years later. Some made me laugh out loud, others made me cry (even if I didn’t admit it at the time), and a few completely changed how I see the world. This list isn’t just about technical brilliance — it’s about the emotional impact, the nostalgia, and those rare scenes that made me pause and think, “Damn… that was perfect.” Everyone’s got their own personal canon, and this is mine.</p>
      </div>
      <div className={`${styles["grid"]} mt-5`}>
        {TEMP_DATA.map((item, index) => (
          <div key={index} style={{ borderRadius: "20px" }} className={`text-center ${styles["grid-item"]} position-relative`}>
            <div className={`${styles["movie-card"]}`}>
              <Image src={horizon.src} alt="Movie Poster" width={350} height={200} sizes="100vw" className={` globalObjectFit`} />
            </div>
            <div className={`text-pretty text-start px-4 pb-1 position-relative ${styles["text-container"]}`}>
              <div className={`${styles["title"]}`}>
              <h4 className="hover-underline" >{item.title}</h4>
              <div className={`${styles["rating"]}`}>
                <GoStarFill className={`text-warning`}/>
                <GoStarFill className={`text-warning`}/>
                <GoStarFill className={`text-warning`}/>
                <GoStarFill className={`text-warning`}/>
                <GoStarFill className={`text-secondary`}/>
              </div>
              </div>
                <div className={`d-flex mb-3`}>
                <div className={`px-2 py-1  me-2`} style={{ backgroundColor: "#121212", borderRadius: "5px", fontSize: "0.8rem" }}>
                  Romance
                </div>
                <div className={`px-2 py-1  me-2`} style={{ backgroundColor: "#121212", borderRadius: "5px", fontSize: "0.8rem" }}>
                  Fantasy
                </div>
                <div className={`px-2 py-1  me-2`} style={{ backgroundColor: "#121212", borderRadius: "5px", fontSize: "0.8rem" }}>
                  Drama
                </div>
                </div>
              <p className="fw-light">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
