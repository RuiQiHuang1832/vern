
import approach1 from "@/assets/images/approach1.png"
import approach2 from "@/assets/images/approach2.png"
import approach3 from "@/assets/images/approach3.png"

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
      imageSrc: approach1.src,
      imageWidth: 500,
      imageHeight: 500,
      direction: "flex-lg-row-reverse" as const,
    },
    {
      id: "anchor-2",
      header: (
        <>
          <span className="white-nowrap">unleash creativity,</span> without the mess
        </>
      ),
      paragraph: (
        <>
          Say Goodbye to Chaos. Easily create and customize playlists, rate and review your media, and discover new content that resonates with your unique preferences.
        </>
      ),
      imageSrc: approach2.src,
      imageWidth: 500,
      imageHeight: 500,
      direction: "flex-lg-row" as const,
    },
    {
      id: "anchor-3",
      header: (
        <>
          discovery is...<br className="d-none d-lg-inline-block"></br> the new standard
        </>
      ),
      paragraph: (
        <>
           Unlock the potential of personalized playlists that reflect your taste. With our platform, you&apos;re not just consuming content – you&apos;re curating a tailored entertainment experience.
        </>
      ),
      imageSrc: approach3.src,
      imageWidth: 500,
      imageHeight: 500,
      direction: "flex-lg-row-reverse" as const,
    }
  ];