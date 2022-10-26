import CustomHeader, {
  HeaderTabBar,
} from "../../components/Widgets/CustomHeader/Header";
import Faq from "../../components/PageSections/Faq";
import { TopContent } from "../../components/Widgets/CustomHeader/HeaderContent";

const tabNames = {
  All: "",
  Stockbroking: "",
  General: "",
  Investments: "",
};

const Blogs = () => {
  const desc =
    "Everything you need to know about Finance and Investing in Africa.";
  return (
    <div>
      <div>
        <CustomHeader
          hasBackImg
          content={<TopContent name="Blog" description={desc} />}
        />
        <HeaderTabBar tabs={tabNames} />
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

export default Blogs;
