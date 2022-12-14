import HomePage from "./home";
import AboutPage from "./about";

const App = ({ heroContent }) => (
  <>
    <HomePage heroContent={heroContent} />
  </>
);

export default App;

export async function getStaticProps() {
  const response = await fetch(
    "https://test-site.gdlapi.com.ng/pages/home/hero"
  );
  const data = await response.json();

  console.log(data);

  return {
    props: {
      heroContent: data,
    },
  };
}
