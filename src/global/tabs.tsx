import { MdSunny } from "react-icons/md";
import { BsSunriseFill } from "react-icons/bs";
import { PiFireSimpleFill } from "react-icons/pi";
import { IoMdStar } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { MdUpdate } from "react-icons/md";


export const dataTabs = {
    tabs: [
      {
        id: "New Today",
        slug: "today",
        title: "Today's New Reviews",
        hasBadge: false,
        icon:<MdSunny size="1.3rem"></MdSunny>
      },
      {
        id: "New This Week",
        slug: "thisweek",
        title: "New Reviews This Week",
        hasBadge: false,
        icon:<BsSunriseFill size="1.3rem"></BsSunriseFill>
      },
      {
        id: "Latest",
        slug:"latest",
        title: "Latest Reviews",
        hasBadge: false,
        icon:<PiFireSimpleFill size="1.3rem"></PiFireSimpleFill>
      },
      {
        id: "Popular (30 Days)",
        slug:"popular",
        title: "Most Downloaded (30 Days)",
        hasBadge: false,
        icon:<IoMdStar size="1.3rem"></IoMdStar>
      },
      {
        id: "Popular (All Time)",
        slug:"popularalltime",
        title: "Most Downloaded (All Time)",
        hasBadge: false,
        icon:<HiSparkles size="1.3rem"></HiSparkles>
      },
      {
        id: "More Trending",
        slug:"trending",
        title: "Trending Reviews",
        hasBadge: false,
        icon:<FaArrowTrendUp size="1.3rem"></FaArrowTrendUp>
      },
      {
        id: "Updated",
        slug:"updated",
        title: "Recently Updated Reviews",
        hasBadge: false,
        icon:<MdUpdate size="1.3rem"></MdUpdate>
      },
    ],
    initialTabId: "Latest",
  }