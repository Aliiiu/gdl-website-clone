import { generatePageMetadata } from "@/utils/metadata";
import BoardTeamSection from "./_components/board-team";
import Hero from "./_components/hero";
import ManagementTeamSection from "./_components/management-team";
import Products from "./_components/products";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Finance and Leasing" });
};

export default function Page() {
  return (
    <div>
      <Hero />
      <ManagementTeamSection />
      <BoardTeamSection />
      <Products />
    </div>
  );
}
