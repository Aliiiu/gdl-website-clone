import CustomHeader from "../components/Widgets/CustomHeader/Header";
import Faq from "../components/PageSections/Faq";
import { TestimonyCard } from "../components/Widgets/Cards/TestimonyCard";

const Testimonials = () => {
  return (
    <div>
      <CustomHeader />
      <div className="-mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 mx-auto max-w-[1200px] md:px-[1.5rem] px-[1.25rem]">
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>
      <section
        id="faq"
        className="lg:px-6 lg:w-4/6 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Testimonials;
