import { sections } from "@/global/sectionsData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";
import FadeInElement from "@/components/FadeInElement";

export default function OurApproach() {
  return (
    <>
      {" "}
      <div style={{ padding: "10em 0 10em 0" }} className={` mx-auto col-xl-8 col-10 col-lg-8`}>
        <FadeInElement value="fade-in-section">
        <h6 className="text-center item slow item-1" style={{ letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: "500", fontFamily: "monospace" }}>
          Preface
        </h6>
        <h1 style={{ fontSize: "3.1em" }} className="fw-bolder text-center my-4 item item slow">
          the art of curation.
        </h1>
        <p style={{ fontSize: "1.3em" }} className="secondary mb-0 fw-light item slow item-2">
          Haven’t you ever wondered how much easier it could be to organize your favorite media? Or how satisfying it would feel to curate playlists that reflect your unique taste? Say goodbye to the chaos of scattered content and hello to a seamless way to enjoy what you love most. Ready to redefine your media experience? Because that... is the <span style={{ fontStyle: "italic", textDecoration: "underline" }}>art of curation.</span>
        </p>
        </FadeInElement>
      </div>
      <section style={{ padding: "6rem 0 10rem 0" }}>{mapObjectToComponent(sections, HeaderWithImageAndParagraph)}</section>
    </>
  );
}
