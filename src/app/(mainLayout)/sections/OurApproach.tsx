import { sections } from "@/global/sectionsData";
import { mapObjectToComponent } from "@/helpers/mapObjectToComponent";
import HeaderWithImageAndParagraph from "@/components/HeaderWithImageAndParagraph";

export default function OurApproach() {
  return (
    <>      <div className={` mx-auto col-xl-6 col-10 col-lg-8`}>
    <h1 style={{ fontSize: "50px" }} className="fw-bolder text-center">
    the art of curation
    </h1>
    <hr></hr>
    <p className="text-secondary mb-0">Explore a new dimension of media cataloging. Our intuitive web app lets you effortlessly create, curate, and explore personalized playlists, transforming how you organize and enjoy your favorite content.</p>
  </div>
  <section style={{ padding: "6rem 0 10rem 0" }}>{mapObjectToComponent(sections, HeaderWithImageAndParagraph)}</section></>
  )
}
