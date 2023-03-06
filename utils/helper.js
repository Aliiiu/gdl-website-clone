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

export const data = {
  stockbroking: [
    {
      img: "/Images/timely-market-intelligence.jpeg",
      title: "Stockbroking",
      description: (
        <div>
          <p>
            Buy shares of profitable Nigerian companies and make money as they
            grow.
          </p>
          <p>
            <br />
          </p>
          <p>
            We buy and sell equities of all companies listed in the Nigerian
            Stock Exchange. We also recover lost shares and unclaimed dividends
            no matter the length of time.
          </p>
          <p>
            <br />
          </p>
          <p>
            With our strong research base and remarkable stockbrokers, we have
            mastered the act of analyzing, trading and advising on the stock
            market and other related ventures.
          </p>
          <p>
            <br />
          </p>
          <p>Buy Shares Now!</p>
        </div>
      ),
    },
  ],
  "dollar-note": [
    {
      img: "/Images/dollar.jpg",
      title: "Dollar Note",
      description: (
        <div>
          <p>
            Invest in our dollar note and earn all your dividends in dollars. We
            put your money to work for an agreed amount of time and pay
            dividends when due.
          </p>
          <p>
            <br />
          </p>
          <p>
            This is a great opportunity to invest money in another currency and
            it is open to everyone irrespective of age and location.
          </p>
          <p>
            <br />
          </p>
          <p>CTA: Invest Now</p>
        </div>
      ),
    },
  ],
  finance: [
    {
      title: "Finance",
      description: (
        <div>
          <p>
            The biggest problem of most businesses is capital. Lack of access to
            money has been the downfall of many commercial institutions.
          </p>
          <p>
            <br />
          </p>
          <p>
            Even banks and other financial institutions which offer loan
            facilities cannot adequately cater to the financial needs of all the
            small and medium scale enterprises as well as large organizations.
          </p>
          <p>
            <br />
          </p>
          <p>
            We help businesses to scale these hurdles by giving out loans to
            established businesses and financing new businesses.
          </p>
          <br />
          <p>
            We also offer special credit facilities such as Fund Management,
            Project Finance, Asset Finance, Trade Finance, Local and
            International Trade: LPO Finance, Invoice Discounting Contract
            Finance and Bank Guarantee.
          </p>
          <br />
          <p>CTA: Contact Us Now</p>
        </div>
      ),
    },
  ],
  "long-term-note": [
    {
      img: "/Images/flat.jpg",
      title: "Long Term Note",
      description: (
        <div>
          <p>
            If you intend to save money for a long term goal (minimum of 2
            years) and make high returns, then this is exactly what you need.
          </p>
          <p>
            <br />
          </p>
          <p>
            Your money will be held and invested by us for at least two years in
            which you can liquidate by giving us a month’s notice.
          </p>
          <p>
            <br />
          </p>
          <p>
            The minimum amount for this superb investment plan is N2,500,000
            with a sky-high interest rate of up to 11% per annum which is paid
            twice within the year.
          </p>
          <p>
            <br />
          </p>
          <p>CTA: Invest Now!</p>
        </div>
      ),
    },
  ],
  "financial-advisory": [
    {
      img: "/Images/african-bis.jpg",
      title: "Financial Advisory",
      description: (
        <div>
          <p>
            Making financial decisions without proper consultation is like
            hunting in the dark, the results are bound to be unpleasant. Let us
            be your light and help guide you in all your financial endeavours.
          </p>
          <p>
            <br />
          </p>
          <p>
            With us by your side, you are assured of success. Our world-class
            team of finance experts will assist you to make only informed
            decisions that will be beneficial to you and your business.
          </p>
          <p>
            <br />
          </p>
          <p>
            Our advisory services cater to a wide range of business dealings
            including the purchase and sale of commercial papers, mergers and
            acquisitions, scaling, business restructuring, takeovers and
            divestments, valuations and IPOs
          </p>
          <p>
            <br />
          </p>
          <p>
            We also offer project advisory services in industries such as Power
            & Utilities, Oil and Gas, Telecommunications, Education, Real Estate
            and Construction.!
          </p>
          <p>
            We also offer project advisory services in industries such as Power
            & Utilities, Oil and Gas, Telecommunications, Education, Real Estate
            and Construction.!
          </p>
          <br />
          <p>Take our hand as we light up your way to prosperity.</p>
          <br />
          <p>CTA – Sign Up Today.</p>
        </div>
      ),
    },
  ],
  "gdl-canary-fund": [
    {
      img: "/Images/cardOneImg.png",
      title: "GDL Canary Fund",
      description: (
        <div>
          <p>
            With flexible interest rates higher than that of commercial banks,
            no maintenance fees and other charges, investing in our high yield
            note is the best thing you with your money.
          </p>
          <p>
            <br />
          </p>
          <p>
            You can make up to 15% per annum and your interest can be paid
            monthly or at once.
          </p>
          <p>
            <br />
          </p>
          <p>
            Investment starts with a minimum of{" "}
            <span
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(32, 33, 34)",
              }}
            >
              ₦
            </span>
            100,000.
          </p>
          <p>
            <br />
          </p>
          <p>
            We are regulated and approved by the Securities and Exchanges
            Commission (SEC) to invest money. You can sleep with both eyes
            closed knowing all your funds are safe with us.
          </p>
        </div>
      ),
    },
  ],
  "high-yield-note": [
    {
      img: "/Images/high-yield-note.jpeg",
      title: "High Yield Note",
      description: (
        <div>
          <p>
            With flexible interest rates higher than that of commercial banks,
            no maintenance fees and other charges, investing in our high yield
            note is the best thing you with your money.
          </p>
          <p>
            <br />
          </p>
          <p>
            You can make as high as 10% per annum and your interest can be paid
            monthly or at once.
          </p>
          <p>
            <br />
          </p>
          <p>
            We are regulated and approved by the Securities and Exchanges
            Commission (SEC) to invest money. You can sleep with both eyes
            closed knowing all your funds are safe with us.
          </p>
        </div>
      ),
    },
  ],
  "money-market-fund": [
    {
      img: "/Images/money-market-fund.jpeg",
      title: "Money Market Fund",
      description: (
        <div>
          <p>
            The GDL Money Market Fund is a special investment plan that allows
            you to invest with as low as N10,000 for a minimum investment period
            of 30 days.
          </p>
          <p>
            <br />
          </p>
          <p>
            It is a high-quality investment that provides more profit than your
            regular bank account. You can keep funding your investment account
            as much as you like and your money is available to you anytime, any
            day, anywhere.
          </p>
          <p>
            <br />
          </p>
          <p>
            All investments are managed by our excellent team of asset managers
            who invest in a wide range of short-term assets.
          </p>
        </div>
      ),
    },
  ],
};
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        careerid: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
