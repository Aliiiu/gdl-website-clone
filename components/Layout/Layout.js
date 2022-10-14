import { PageContainer } from "./layout.style";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children, ...props }) => (
  <div>
    <Topbar />
    <main>
      <PageContainer>
        <div className="w-full h-full">{children}</div>
      </PageContainer>
    </main>
  </div>
);

export default Layout;
