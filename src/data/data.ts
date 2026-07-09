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
  button: string;
  name: string;
  date: string;
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
    role: "Bachelor of Biosystem Technology (Hons) ",
    desc: "I hold a Bachelor’s degree in Biosystems Technology, specializing in Industrial Biosystems Technology. I have also completed and published undergraduate research in the field of aquaculture at ICIET 2025.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "University of Sri Jayewardenepura",
    duration: "July 2026 – Present",
    role: "Forestry and Environmental science",
    desc: "Reading",
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
    image: "/leopard.png",
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
    name: "Dr. Malaka Perera",
    role: "Wildlife Biologist",
    country: "Canada",
    rating: 5,
    desc: "Exceptional field awareness and a genuine passion for conservation. Jastan's research work on aquaculture was thorough, well-documented.",
  },
  {
    name: "Sarah Johnson",
    role: "Environmental Researcher",
    country: "Norway",
    rating: 4,
    desc: "A dedicated and detail-oriented researcher. Consistently reliable in fieldwork and always brings fresh insight to environmental projects.",
  },
  {
    name: "Dr. Anushka Fernando",
    role: "Forestry Consultant",
    country: "India",
    rating: 5,
    desc: "Impressive knowledge of sustainable forest ecosystems. A collaborative and thoughtful presence in every research discussion.",
  },
  {
    name: "Aryan Sharma",
    role: "Conservation Officer",
    country: "USA",
    rating: 4,
    desc: "Strong understanding of wildlife behavior and ecosystem dynamics. Brings a calm, informed approach to every we've worked on together.",
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
