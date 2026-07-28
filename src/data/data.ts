import { Star, Award, ShieldCheck, LucideIcon } from "lucide-react";

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button?: string;
  name: string;
  date?: string;
  title: string;
  link: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  country: string;
  rating: number;
  desc: string;
  link: string;
  salutation: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}

export const experiences: Experience[] = [
  {
    company: "Bt/Hindu College Batticaloa",
    duration: "July 2017 – December 2019",
    role: "G.C.E. Advanced Level",
    desc: "I completed my G.C.E. (A/L) education in the Technology Stream, with Information and Communication Technology (ICT) as my basket (core) subject. ",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "University of Sri Jayewardenepura",
    duration: "June 2020 – March 2025",
    role: "Bachelor of Biosystems Technology (Hons)",
    desc: "I hold a Bachelor’s degree in Biosystems Technology, specializing in Industrial Biosystems Technology. I have also completed my undergraduate research in the field of aquaculture, which was presented and published at ICIET 2025.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "University of Sri Jayewardenepura",
    duration: "July 2026 – Present",
    role: "MSc in Forestry and Environmental Management",
    desc: "Currently pursuing postgraduate studies in sustainable natural resource management, forest conservation, and environmental management.",
    dotColor: "bg-[#FD853A]",
  },
];

export const buttons: string[] = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "4.9 Average Rating",
  },
  {
    icon: Award,
    name: "25+ Winning Awards",
  },
  {
    icon: ShieldCheck,
    name: "Certified Product Design",
  },
];

export const skills: string[] = [
  "Wildlife Biology",
  "Ecology",
  "Ornithology",
  "Forest Ecology",
  "Conservation Biology",
  "Biodiversity Assessment",
  "Wildlife Tracking",
  "Species Identification",
  "GIS Mapping",
  "iNaturalist",
  "Wildlife Photography",
  "Nature Journaling",
];

export const blogs: Blog[] = [
  {
    image: "/elephant.png",
    button: "Read More",
    name: "Asian Elephant",
    date: "06 July, 2026",
    title: "Elephas maximus",
    link: "https://thecanofy.blogspot.com/2026/07/asian-elephant.html",
  },
  {
    image: "/bear.png",
    button: "Explore",
    name: "Sloth Bear",
    date: "06 July, 2026",
    title: "Melursus ursinus",
    link: "https://thecanofy.blogspot.com/2026/07/sloth-bear.html",
  },
  {
    image: "/leopard.png",
    button: "Read More",
    name: "Leopard",
    date: "06 July, 2026",
    title: "Panthera pardus",
    link: "https://thecanofy.blogspot.com/2026/07/sri-lankan-leopard.html",
  },
  {
    image: "/elephant.png",
    button: "Read More",
    name: "Asian Elephant",
    date: "06 July, 2026",
    title: "Elephas maximus",
    link: "https://thecanofy.blogspot.com/2026/07/asian-elephant.html",
  },
  {
    image: "/bear.png",
    button: "Explore",
    name: "Sloth Bear",
    date: "06 July, 2026",
    title: "Melursus ursinus",
    link: "https://thecanofy.blogspot.com/2026/07/sloth-bear.html",
  },
  {
    image: "/leopard1.png",
    button: "Read More",
    name: "Leopard",
    date: "06 July, 2026",
    title: "Panthera pardus",
    link: "https://thecanofy.blogspot.com/2026/07/sri-lankan-leopard.html",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/Frame 26.svg",
    title: "Lirante 1",
    href: "/project-1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Lirante 2",
    href: "/project-2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Lirante 3",
    href: "/project-3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Lirante 4",
    href: "/project-4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
];

export const reviews: Review[] = [
  {
    name: "Nobody",
    role: "No_Role",
    country: "No_Country",
    rating: 5,
    desc: "Exceptional field awareness and a genuine passion for conservation. Jastan's research work on aquaculture was thorough, well-documented.",
    link: "",
    salutation: "Mrs.",
  },
  {
    name: "Nobody",
    role: "No_Role",
    country: "No_Country",
    rating: 5,
    desc: "Exceptional field awareness and a genuine passion for conservation. Jastan's research work on aquaculture was thorough, well-documented.",
    link: "",
    salutation: "Mrs.",
  },
  {
    name: "Nobody",
    role: "No_Role",
    country: "No_Country",
    rating: 5,
    desc: "Exceptional field awareness and a genuine passion for conservation. Jastan's research work on aquaculture was thorough, well-documented.",
    link: "",
    salutation: "Mrs.",
  },
  {
    name: "Nobody",
    role: "No_Role",
    country: "No_Country",
    rating: 5,
    desc: "Exceptional field awareness and a genuine passion for conservation. Jastan's research work on aquaculture was thorough, well-documented.",
    link: "",
    salutation: "Mrs.",
  },
];

export const cardData: CardData[] = [
  { title: "Jewellery Design", imageSrc: "/Rectangle 7.svg" },
  { title: "Mehndi Expert", imageSrc: "/Rectangle 7.svg" },
  { title: "Fashion Designer", imageSrc: "/Rectangle 7.svg" },
  { title: "Craft Expert", imageSrc: "/Rectangle 7.svg" },
  { title: "Beauty & Imitation", imageSrc: "/Rectangle 7.svg" },
  { title: "Designer Studio", imageSrc: "/Rectangle 7.svg" },
];
