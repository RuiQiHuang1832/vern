import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { WEBSITE_NAME } from "@/global/global";


const metadataLibrary = {
  About: {
    title: `About | ${WEBSITE_NAME}`,
    description: `Explore the ${WEBSITE_NAME} About page to learn about our mission, impact, and the people behind the platform. Discover how we're revolutionizing the way you catalog and explore your favorite movies, TV shows, books, and games.`,
  },
  Login: {
    title: `Login | ${WEBSITE_NAME}`,
    description: `Log in to ${WEBSITE_NAME} and unlock a world of personalized media discovery. Seamlessly access your curated playlists, insightful reviews, and join a community of entertainment enthusiasts. Your next media adventure begins here.`,
  },
  Community: {
    title: `Community | ${WEBSITE_NAME}`,
    description: `Welcome to the ${WEBSITE_NAME} Community page, where you can explore a diverse world of curated playlists and insightful reviews by fellow members. Immerse yourself in the collective passions of our community, discovering new media gems and connecting with like-minded enthusiasts.`,
  },
  Create: {
    title: `Create | ${WEBSITE_NAME}`,
    description: `Welcome to the ${WEBSITE_NAME} Create page, your platform for crafting personalized playlists that reflect your unique tastes. Here, you can curate collections of your favorite movies, TV shows, books, and games, sharing your entertainment journey with the community and discovering new gems along the way.`,
  },
  View: {
    title: `View | ${WEBSITE_NAME}`,
    description: `Welcome to the ${WEBSITE_NAME} View page, your personal hub for exploring and enjoying the playlists you've meticulously curated. Immerse yourself in your own collection of favorite movies, TV shows, books, and games, and relive your entertainment journey in a seamless and engaging way.`,
  },
  Search: {
    title: `Search | ${WEBSITE_NAME}`,
    description: `Welcome to the ${WEBSITE_NAME} Search page, your gateway to discovering a wealth of playlists created by other users. Uncover a treasure trove of entertainment as you explore and engage with a diverse range of media collections, connecting with the creativity and interests of the ${WEBSITE_NAME} community.`,
  },
};

const generateOpenGraph = (title: string, description: string, url: string): OpenGraph => {
  return {
    title,
    description,
    url,
    siteName: `${WEBSITE_NAME}`,
    locale: "en_US",
    type: "website",
    // Add any other common properties here
  };
};


interface PageMetadata {
  title: string;
  description: string;
}

type PageName = "About" | "Login" | "Community" | "Create" | "View" | "Search";

const url: string = "https://localhost:3000/";

function generatePageMetadata(pageName: PageName): Metadata {
  const pageMetadata: PageMetadata = metadataLibrary[pageName];
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    openGraph: generateOpenGraph(pageMetadata.title, pageMetadata.description, `${url}${pageMetadata.title.toLowerCase()}`),
  };
}

export const aboutMetadata: Metadata =  generatePageMetadata("About");
export const loginMetadata: Metadata = generatePageMetadata("Login");
export const communityMetadata: Metadata = generatePageMetadata("Community");
export const createMetadata: Metadata = generatePageMetadata("Create");
export const viewMetadata: Metadata = generatePageMetadata("View");
export const searchMetadata: Metadata = generatePageMetadata("Search");