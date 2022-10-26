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
} from "react-icons/io5";

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
  { name: "Home", subname: "GDL Home", icon: <IoHomeOutline /> },
  {
    name: "Products",
    subname: "Some of our products",
    icon: <IoCubeOutline />,
  },
  { name: "USP", subname: "Our Unique Selling Point", icon: <IoStarOutline /> },
  {
    name: "Get Started",
    subname: "In Three Easy Steps",
    icon: <IoRocketOutline />,
  },
  {
    name: "Testimonials",
    subname: "What people are saying",
    icon: <IoHeartHalfOutline />,
  },
  { name: "Blog", subname: "Guides on Finance", icon: <IoBulbOutline /> },
  {
    name: "Media",
    subname: "Our social participation",
    icon: <IoFilmOutline />,
  },
];
