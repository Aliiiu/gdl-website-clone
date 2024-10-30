import { PageContainer, JoinClubContainer } from "./layout.style";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import JoinTheClub from "../PageSections/JoinTheClub";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const route = useRouter();

  const { hideLayout } = route.query;
  return (
    <div className="">
      {hideLayout ? "" : <Topbar />}
      <main>
        <PageContainer>
          <div className="w-full h-full">{children}</div>
        </PageContainer>
      </main>
      {hideLayout ? (
        ""
      ) : (
        <>
          <JoinClubContainer id="join-club" className="softGradient">
            <JoinTheClub />
          </JoinClubContainer>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
