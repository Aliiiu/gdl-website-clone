import { PageContainer } from "./layout.style";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children, ...props }) => (
  <div>
    <main>
      <Topbar />
      <PageContainer className="w-full">{children}</PageContainer>
    </main>
  </div>
);

export default Layout;
