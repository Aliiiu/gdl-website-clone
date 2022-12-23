import HomePage from "./home";
import AboutPage from "./about";
import { makeRequest } from "../apiCalls/requestHandler";

const App = ({ heroContent }) => (
  <>
    <HomePage heroContent={heroContent} />
  </>
);

export default App;

export async function getStaticProps() {
  // const data_one = await makeRequest("url")
  // try {
  //   const data = await makeRequest("/pages/home/hero", null, null);
  // } catch (error) {
  //   alert(error.message);
  // }

  const userData = await makeRequest("/pages/home/hero", null, null);

  return {
    props: {
      heroContent: userData.data,
    },
  };
}
