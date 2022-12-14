import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoMedium,
  IoLogoWhatsapp,
  IoCubeOutline,
  IoHomeOutline,
  IoStarOutline,
  IoRocketOutline,
  IoHeartHalfOutline,
  IoBulbOutline,
  IoFilmOutline,
  IoPersonCircleOutline,
  IoShapesOutline,
  IoIdCardOutline,
  IoPeopleCircleOutline,
  IoStorefrontOutline,
  IoBriefcaseOutline,
  IoTelescopeOutline,
  IoHelp,
  IoChatboxOutline,
  IoMailOpenOutline,
  IoCallOutline,
} from "react-icons/io5";
import { FaHandHoldingUsd, FaMoneyBill } from "react-icons/fa";

export const footerLinkData = [
  {
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoFacebook />,
  },
  {
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoLinkedin />,
  },
  {
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoInstagram />,
  },
  {
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoTwitter />,
  },
  {
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoMedium />,
  },
  {
    url: "https://www.facebook.com/GDLAssetManagement/",
    icon: <IoLogoWhatsapp />,
  },
];
export const companyLinks = [
  { url: "/about#core-values", name: "Core Values" },
  { url: "/about#corporate-information", name: "Corporate Information" },
  { url: "/about#board-of-directors", name: "Board of Directors" },
  { url: "/about#management-team", name: "Management Team" },
];
export const productLinks = [
  { url: "/products/high-yeild-note", name: "High Yield Note" },
  { url: "/products/finance", name: "Finance" },
  { url: "/products/dollar-note", name: "Dollar Note" },
  { url: "/products/money-market-fund", name: "Money Market Fund" },
  { url: "/products/stockbroking", name: "Stockbroking" },
  { url: "/products/gdl-canary-fund", name: "GDL Canary Fund" },
  { url: "/products/long-term-note", name: "Long Term Note" },
  { url: "/products/gdl-income-fund", name: "GDL Income Fund" },
];

export const resourceLinks = [
  { url: "/blog", name: "Blog" },
  { url: "/career", name: "Career" },
  { url: "/testimonials", name: "Testimonials" },
  { url: "/media", name: "Media" },
  { url: "/research", name: "Research" },
  { url: "/faq", name: "FAQs" },
  { url: "/contact", name: "Contact" },
];

export const homeLinks = [
  [
    { name: "Home", subname: "GDL Home", icon: <IoHomeOutline />, url: "/" },
    {
      name: "Products",
      subname: "Some of our products",
      icon: <IoCubeOutline />,
      url: "/products",
    },
    {
      name: "USP",
      subname: "Our Unique Selling Point",
      icon: <IoStarOutline />,
      url: "/#usp",
    },
    {
      name: "Get Started",
      subname: "In Three Easy Steps",
      icon: <IoRocketOutline />,
      url: "/#get-started",
    },
    {
      name: "Testimonials",
      subname: "What people are saying",
      icon: <IoHeartHalfOutline />,
    },
    {
      name: "Blog",
      subname: "Guides on Finance",
      icon: <IoBulbOutline />,
      url: "/#blog",
    },
    {
      name: "Media",
      subname: "Our social participation",
      icon: <IoFilmOutline />,
      url: "/#media",
    },
  ],
  [
    {
      name: "Corporate Information",
      subname: "What we stand for",
      icon: <IoPersonCircleOutline />,
      url: "/about#corporate-information",
    },

    {
      name: "Core Values",
      subname: "In Three Easy Steps",
      icon: <IoShapesOutline />,
      url: "/about#core-values",
    },

    {
      name: "Management Team",
      subname: "Guides on Finance",
      icon: <IoIdCardOutline />,
      url: "/about#management-team",
    },
    {
      name: "Board of Directors",
      subname: "Our social participation",
      icon: <IoPeopleCircleOutline />,
      url: "/about#board-of-directors",
    },
  ],
  [
    {
      name: "High Yield Note",
      subname: "High Interest Rate + Low Risk = The Perfect Investment",
      icon: <FaMoneyBill />,
    },

    {
      name: "Finance",
      subname: "Don’t take on that big project alone; get a loan.",
      icon: <FaHandHoldingUsd />,
    },

    {
      name: "Dollar Note",
      subname: "What’s better than making money? Making it in dollars!",
      icon: <FaMoneyBill />,
    },
    {
      name: "Money Market Fund",
      subname: "Cruise your way to financial freedom with as little as ₦10,000",
      icon: <IoStorefrontOutline />,
    },
    {
      name: "Stockbroking",
      subname: "Member of the Nigerian Stock Exchange",
      icon: <IoPeopleCircleOutline />,
    },
    {
      name: "GDL Canary Fund",
      subname: "Let your money speak for you.",
      icon: <IoPeopleCircleOutline />,
    },
    {
      name: "Long Term Note",
      subname: "Play the long game, invest for the future",
      icon: <IoPeopleCircleOutline />,
    },
    {
      name: "GDL Income Fund",
      subname: "There's no cap to your income growth",
      icon: <IoPeopleCircleOutline />,
    },
  ],
  [
    {
      name: "Blog",
      subname: "Guides on Finance",
      icon: <IoBulbOutline />,
    },

    {
      name: "Career",
      subname: "Join the tribe",
      icon: <IoBriefcaseOutline />,
    },

    {
      name: "Testimonials",
      subname: "What people are saying",
      icon: <IoHeartHalfOutline />,
    },
    {
      name: "Media",
      subname: "Our social participation",
      icon: <IoFilmOutline />,
    },
    {
      name: "Research",
      subname: "Stay informed, Beat the odds",
      icon: <IoTelescopeOutline />,
    },
    {
      name: "FAQs",
      subname: "Frequently Asked Questions",
      icon: <IoHelp />,
    },
  ],
  [
    {
      name: "Contact Us",
      subname: "Our Contact Information",
      icon: <IoChatboxOutline />,
    },

    {
      name: "Write to Us",
      subname: "Send us an email",
      icon: <IoMailOpenOutline />,
    },

    {
      name: "Call Us",
      subname: "Give us a call",
      icon: <IoCallOutline />,
    },
  ],
];
