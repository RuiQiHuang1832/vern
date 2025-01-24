import { StaticImageData } from 'next/image';

import { WEBSITE_NAME } from "@/global/global";

import crocodile from "@/assets/svg/crocodile.svg"
import shrimp from "@/assets/svg/shrimp.svg"
import whale from "@/assets/svg/whale.svg"

import alex_johnson from "@/assets/images/alex_johnson.jpg";
import sam_kim from "@/assets/images/sam_kim.jpg";
import taylor_reed from "@/assets/images/taylor_reed.jpg";
import jordan_parker from "@/assets/images/jordan_parker.jpg";
import tool_1 from "@/assets/images/employee-onboarding-icon.png"
import tool_2 from "@/assets/images/employee-onboarding-icon-2.png"
import tool_3 from "@/assets/images/employee-onboarding-icon-3.png"

import step_1 from "@/assets/svg/step_1.svg"
import step_2 from "@/assets/svg/step_2.svg"
import step_3 from "@/assets/svg/step_3.svg"
import step_4 from "@/assets/svg/step_4.svg"
import step_5 from "@/assets/svg/step_5.svg"

import stats_growth from "@/assets/svg/stats_growth.svg"
import stats_read from "@/assets/svg/stats_read.svg"
import stats_users from "@/assets/svg/stats_users.svg"
import stats_visits from "@/assets/svg/stats_visits.svg"

import step1 from "@/assets/images/steps/step1.png"
import step2 from "@/assets/images/steps/step2.png"
import step3 from "@/assets/images/steps/step3.png"
import step4 from "@/assets/images/steps/step4.png"
import step5 from "@/assets/images/steps/step5.png"


export type stepDataType = {
    id: string;
    title: string;
    description: string;
    icon:StaticImageData;
    image:StaticImageData;

  };
  export type toolDataType = {
    title: string;
    description: string;
    source:StaticImageData;

  };
  export type statsDataType = {
    number: string;
    description: string;
    icon:StaticImageData;

  };

  export type featuresDataType = {
    name: string;
    description: string;
  };
  export type quoteDataType = {
    name: string;
    role:string
    description: string;
    source:StaticImageData;

  };
  export type accordionDataType = {
    id: string;
    question: string
    answer: React.ReactNode;
  };
  export type arrowDataType = {
    path:string;
    left: string
 
  };
  //log

  export type membershipDataType = {
    plan: string;
    price: string;
    type:string;
    features:string[];
    description: string;
    src:StaticImageData
  };

  export const membershipData:membershipDataType[] = [
    {
      plan: "essentials",
      price: "$0",
      type: "Get started for free",
      description: "Perfect for casual users looking to start organizing their favorite media.",
      features: ["Create up to 3 playlists", "Rate media with a 5-star system", "Basic media search functionality"],
      src: shrimp
    },
    {
      plan: "premium",
      price: "$8",
      type: "Open an account",
      description: "Ideal for enthusiasts ready to dive deeper into media cataloging.",
      features: ["Unlimited playlists", "Advanced media search filters", "Custom tags for better organization", "Collaborative playlist creation", "Download playlists as PDF"],
      src: crocodile

    },
    {
      plan: "enterprise",
      price: "Custom pricing",
      type: "Contact sales",
      description: "Designed for power users who want the complete media curation experience.",
      features: ["AI-powered playlist suggestions", "Dynamic playlist cover designs", "Offline playlist access", "Priority customer support", "Custom media sorting rules", "Early access to new features", "Advanced collaboration tools", "Shareable playlist links",],
      src:whale
    },
  ];




  export const stepData: stepDataType[] = [
    {
        id: "step 1",
        title: "Select Media Type",
        description: "Users choose the type of media they want to review, such as movies, TV shows, or music. This ensures the review process is tailored to the specific category.",
        icon: step_1, // Represents media like movies and shows.
        image: step1
    },
    {
        id: "step 2",
        title: "Choose Specific Title",
        description: "After selecting the media type, users pick a specific title (up to 10) within that category. This allows them to focus on the media they find most interesting.",
        icon: step_2, // Suggests listing or selecting items.
        image: step2
    },
    {
        id: "step 3",
        title: "Add Context",
        description: "Users can provide optional context, such as their favorite genres, similar titles they've enjoyed, or personal preferences. This adds depth to their reviews, making them more helpful.",
        icon: step_3, // Reflects creativity or adding input.
        image: step3
    },
    {
        id: "step 4",
        title: "Rate and Review",
        description: "Users review the selected media, providing a star rating (1-5) and written feedback. Detailed reviews help others discover and appreciate the media more effectively.",
        icon: step_4, // Indicates a review or rating system.
        image: step4
    },
    {
        id: "step 5",
        title: "Save and Share",
        description: "Users can save their review to their profile or share it on social media platforms to help others discover great media. Sharing also invites discussions and recommendations.",
        icon: step_5, // Represents sharing or saving content.
        image: step5
    }
];


export const toolData:toolDataType[] = [
    {
        title:"Smart recommendations",
        description:"Get personalized media suggestions based on your reviews, search history, and preferences, helping you discover content you'll love. Our recommendations are tailored to match your unique taste, making it easier to find new movies, books, and shows.",
        source:tool_1
    },
    {
        title:"Community Insights",
        description:"Stay up to date with trending reviews and discussions from a vibrant community of media enthusiasts. Discover popular titles and gain valuable insights into what's worth watching or reading.",
        source:tool_2
    },
    {
        title:"Curated Collections",
        description:"Explore expert-curated collections designed to showcase hidden gems and essential media. These carefully selected lists help you find unique and quality content based on specific themes or genres.",
        source:tool_3
    },
]

export const statsData:statsDataType[] = [
    {
        number:"+2000",
        description:"Members Active",
        icon:stats_users
    },
    {
        number:"50%",
        description:"Review Growth",
        icon:stats_growth
    },
    {
        number:"60K",
        description:"Daily Visits",
        icon:stats_visits
    },
    {
        number:"~120",
        description:"Reviews Read Daily",
        icon:stats_read
    }
]
export const quoteData:quoteDataType[] = [
    {
        name:"Alex Johnson",
        role:"Advisor @ Synergy Studios",
        description:"This platform has transformed how I discover and share media. The recommendations are spot on and the community is incredibly supportive.",
        source: alex_johnson,
      
    },
    {
        name:"Taylor Reed",
        role:"Chief Content Strategist",
        description:"I love how easy it is to find new content and share my reviews with others. It is like having a personal media curator at my fingertips!",
        source: taylor_reed,
    },
    {
        name:"Jordan Parker",
        role:"Senior Editor @ WriteWorks Inc.",
        description:"The user interface is so intuitive. I was able to jump right into exploring and reviewing media without any hassle.",
        source: jordan_parker
    },
    {
        name:"Sam Kim",
        role:"Marketing @ Brand Solutions",
        description:"Being part of this community has enhanced my media experience. The insights and recommendations are invaluable!",
        source: sam_kim
    }
]

export const featuresData:featuresDataType[] =[
    {name:"Infinite Scrolling, Optimized",
     description:"Effortless navigation powered by intuitive design and modern solutions like React, Vue, and more.",
    },
    {name:"Scalable and Flexible",
    description:"Whether you're reviewing your favorite show or exploring new media, our platform is ready to grow with your needs.",
   },
]

export const arrowData:arrowDataType[] = [
    {
        path:`M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z`,
      left:`29%`
    },  
      {
        path:`M183.936 34.6617C184.345 34.5971 184.624 34.2131 184.56 33.8039L183.507 27.1365C183.443 26.7273 183.059 26.448 182.65 26.5125C182.241 26.5771 181.961 26.9611 182.026 27.3703L182.961 33.2969L177.034 34.2323C176.625 34.2968 176.346 34.6808 176.41 35.09C176.475 35.4991 176.859 35.7785 177.268 35.7139L183.936 34.6617ZM1.102 28.5504C45.4253 -6.35581 123.361 -9.12798 183.378 34.5274L184.26 33.3143C123.766 -10.6887 45.0856 -7.99759 0.17394 27.372L1.102 28.5504Z`,
      left:`59%`
    },
]

  

export const accordionData:accordionDataType[] = [
    {
        id: "questionOne",
        question: `Is there a cost associated with using ${WEBSITE_NAME}?`,
        answer: (
            <>
                <p><strong>No, absolutely not!</strong> Using <em>{WEBSITE_NAME}</em> is completely free and will <strong>always be free!</strong></p>
                <ul>
                    <li className="mb-2"><mark>Optional subscription</mark></li>
                    <li className="mb-2"><mark>No hidden charges</mark></li>
                    <li className="mb-2"><mark>Enjoy access to valuable resources without financial barriers</mark></li>
                </ul>
                <div>Feel free to explore, review, and share your thoughts on your favorite media titles with zero cost involved!</div>
            </>
        )
    },
    {
        id: "questionTwo",
        question: `Can I customize my user experience on ${WEBSITE_NAME}?`,
        answer: (
            <>
                <p><strong>Yes, definitely!</strong> We offer a range of customization options to make your experience truly your own:</p>
                <ul>
                    <li><strong>Personalize your profile:</strong> Choose an avatar, write a bio, and stand out!</li>
                    <li><strong>Set notification preferences:</strong> Decide what updates matter most to you.</li>
                    <li><strong>Adjust viewing settings:</strong> Create the perfect browsing environment.</li>
                </ul>
                <div>Your comfort and satisfaction are our top priorities. Customize away and enjoy a tailored experience!</div>
            </>
        )
    },
    {
        id: "questionThree",
        question: "How can I provide feedback on a specific title?",
        answer: (
            <>
                <p><strong>It’s easy and fun!</strong> Share your thoughts and ratings with just a few steps:</p>
                <ol>
                    <li>Select the type of media (e.g., movie, TV show, or music).</li>
                    <li>Choose the specific title you want to review.</li>
                    <li>Provide your feedback, including a <strong>rating</strong> and <strong>review description</strong>.</li>
                </ol>
                <div>Your insights help others discover amazing media. Join the community and make your voice heard!</div>
            </>
        )
    },
    {
        id: "questionFour",
        question: "Are there any restrictions on what I can review?",
        answer: (
            <>
                <p><strong>Not at all!</strong> Feel free to review:</p>
                <ul>
                    <li>The <em>latest blockbusters</em></li>
                    <li>Timeless <em>classic TV shows</em></li>
                    <li>Hidden gems like an <em>underground indie album</em></li>
                </ul>
                <div>We welcome all kinds of reviews—express your thoughts on the media that resonates with you and connect with a diverse community of reviewers.</div>
            </>
        )
    },
    {
        id: "questionFive",
        question: "Can I talk to a real person?",
        answer: (
            <>
                <p><strong>Absolutely!</strong> Our Success Team is here for you:</p>
                <ul>
                    <li>Have questions? We’re happy to help before and after you get started.</li>
                    <li>Need tips? We’ll help you optimize your experience.</li>
                </ul>
                <div>Email us at <a href={`mailto:hello@${WEBSITE_NAME}.com`}>hello@{WEBSITE_NAME}.com</a> to connect with our friendly team. We’re happy to assist you in <strong>French</strong>, <strong>English</strong>, <strong>Spanish</strong>, or <strong>German</strong>.</div>
            </>
        )
    },
];
