import { PageContainer } from "../components/Layout/layout.style";
import Faq from "../components/PageSections/Faq";
import GetStarted from "../components/PageSections/GetStarted";
import JoinTheClub from "../components/PageSections/JoinTheClub";
import Products from "../components/PageSections/Products";

const HomePage = () => {
  return (
    <PageContainer>
      <section
        id="our-product"
        className="lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Products />
      </section>
      <section
        id="get-started"
        className="lg:w-4/6 mx-auto pt-20 -mb-20 w-full"
      >
        <GetStarted />
      </section>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
      <section id="join-club" className="softGradient">
        <div className="lg:px-6 lg:w-4/6 mx-auto py-12 md:py-24 w-full">
          <JoinTheClub />
        </div>
      </section>
    </PageContainer>
  );
};

export default HomePage;
