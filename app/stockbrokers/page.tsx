import { generatePageMetadata } from "@/utils/metadata";
import BoardTeamSection from "./_components/board-team";
import Hero from "./_components/hero";
import ManagementTeamSection from "./_components/management-team";
import Products from "./_components/products";

export const generateMetadata = () => {
  return generatePageMetadata({ title: "Stockbrokers" });
};

export default function Page() {
  return (
    <main>
      <Hero />
      <ManagementTeamSection />
      <BoardTeamSection />
      <Products />
    </main>
  );
}
