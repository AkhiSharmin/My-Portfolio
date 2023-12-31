import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Servicess from "../Servicess/Servicess";
import Testimonials from "../Testimonials/Testimonials";
import WorkDetails from "../WorkDetails/WorkDetails";

const Home = () => {
  return (
    <>
      <Banner />
      <WorkDetails />
      <About />
      <Portfolio />
      <Servicess />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
