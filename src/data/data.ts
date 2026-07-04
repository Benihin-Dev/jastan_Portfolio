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
  rating: number;
  text: string;
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
    image: "/Rectangle 6.svg",
    button: "Read More",
    name: "Mahesh Pokale",
    date: "10 Nov, 2024",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    image: "/Frame 60.svg",
    button: "Explore",
    name: "Sarah Johnson",
    date: "12 Dec, 2024",
    title: "Mastering Tailwind: Tips for Clean UI Development",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Check Now",
    name: "John Doe",
    date: "1 Jan, 2025",
    title: "Modern Web Development in 2025",
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
    name: "Mahesh Pokale",
    role: "Web Designer",
    rating: 5,
    text: "Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    rating: 4,
    text: "Excellent work! Very professional and meets deadlines consistently. Highly recommended for design and development projects.",
  },
  {
    name: "John Doe",
    role: "UI/UX Lead",
    rating: 5,
    text: "Top quality design and coding. Strong attention to detail and highly collaborative throughout the project lifecycle.",
  },
  {
    name: "Aryan Sharma",
    role: "Software Engineer",
    rating: 4,
    text: "Innovative approach, clean design, and prompt delivery. Will work together again for sure!",
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
