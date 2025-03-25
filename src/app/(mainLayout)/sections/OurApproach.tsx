import { sections } from "@/global/sectionsData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import FadeInElement from "@/components/FadeInElement";
import ReactTypingEffect from 'react-typing-effect';

export default function OurApproach() {
  return (
    <>
      {" "}
      <div style={{ padding: "10em 0 10em 0" }} className={` mx-auto  col-10 col-xl-8`}>
        <FadeInElement value="fade-in-section">
        <h6 className="text-center item slow item-1 section-heading" >
          Preface
        </h6>
        <h1 style={{ fontSize: 'clamp(2.5em, 5vw, 3.3em)',transition: 'font-size 0.5s ease-in-out'  }} className="fw-bolder text-center my-4 item item slow">
          the art of <ReactTypingEffect speed={100} eraseSpeed={10} eraseDelay={2000} typingDelay={0} text={[    
            "curation.","design.","creativity.","development.","innovation.","collaboration."]}></ReactTypingEffect>
        </h1>
        <p style={{ fontSize: 'clamp(0.5em, 5vw, 1.3em)',transition: 'font-size 0.5s ease-in-out'  }} className="secondary mb-0 fw-light item slow item-2">
          Haven’t you ever wondered how much easier it could be to organize your favorite media? Or how satisfying it would feel to curate playlists that reflect your unique taste? Say goodbye to the chaos of scattered content and hello to a seamless way to enjoy what you love most. Ready to redefine your media experience? Because that... is the <span style={{ fontStyle: "italic", textDecoration: "underline" }}>art of curation.</span>
        </p>
        </FadeInElement>
      </div>
      <section style={{ padding: "6rem 0rem 10rem 0rem" }} className="">{mapObjectToComponent(sections, HeaderWithImageAndParagraph)}</section>
    </>
  );
}
