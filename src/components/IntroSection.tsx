import FadeInElement from "./FadeInElement";
import { introData } from "@/global/homeData";
export default function IntroSection({ header, title, description }: introData) {
  return (
    <div className={`container col-10 section-container`}>
      <FadeInElement value="fade-in-section">
        <h6 className="item slow item-1 section-heading">{header}</h6>
        <h1 className="item slow section-title">{title}</h1>
        <p className="item slow item-2 section-description">{description}</p>
      </FadeInElement>
    </div>
  );
}
