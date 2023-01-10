import Navbar from "../home/HomeNav";
import HomeHero from "../home/HomeHero";
import HomeContent from "../home/HomeContent";
import HomeBrands from "../home/HomeBrands";
import HomeSlider from "../home/homeReview/HomeSlider";
import HomeContact from "../home/HomeContact";
import HomeFooter from "../home/HomeFooter";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeContent />
      <HomeBrands />
      <HomeSlider />
      <HomeContact />
      <HomeFooter />
    </>
  );
}

export default Home;
