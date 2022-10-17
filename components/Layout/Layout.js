import { PageContainer } from "./layout.style";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, ...props }) => (
  <div>
    <Topbar />
    <main>
      <PageContainer>
        <div className="w-full h-full">{children}</div>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default Layout;
