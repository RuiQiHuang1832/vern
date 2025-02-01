
import step3 from "@/assets/images/steps/step3.png";
import step1 from "@/assets/images/steps/step1.png";
import step2 from "@/assets/images/steps/step2.png";

export interface SectionType {
    id: string;
    header: React.ReactNode;
    paragraph: React.ReactNode;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    direction: 'flex-lg-row' | 'flex-lg-row-reverse';
    sectionContainerClass?:string;
  }


export const sections: SectionType[] = [
    {
      id: "anchor-1",
      header: (
        <>
          unlock: fluid digital mastery
        </>
      ),
      paragraph: (
        <>
           Our innovative web app empowers you to effortlessly organize, curate, and enjoy your favorite media. Whether it&apos;s movies, TV shows, or other content, our platform provides a seamless and intuitive solution.
        </>
      ),
      imageSrc: step1.src,
      imageWidth: 600,
      imageHeight: 600,
      direction: "flex-lg-row-reverse" as const,
    },
    {
      id: "anchor-2",
      header: (
        <>
          simplify your multimedia lifestyle
        </>
      ),
      paragraph: (
        <>
          Say Goodbye to Chaos. Easily create and customize playlists, rate and review your media, and discover new content that resonates with your unique preferences.
        </>
      ),
      imageSrc: step2.src,
      imageWidth: 600,
      imageHeight: 600,
      direction: "flex-lg-row" as const,
    },
    {
      id: "anchor-3",
      header: (
        <>
          seamlessness is...<br></br> the new standard
        </>
      ),
      paragraph: (
        <>
           Unlock the potential of personalized playlists that reflect your taste. With our platform, you&apos;re not just consuming content – you&apos;re curating a tailored entertainment experience.
        </>
      ),
      imageSrc: step3.src,
      imageWidth: 600,
      imageHeight: 600,
      direction: "flex-lg-row-reverse" as const,
    }
  ];