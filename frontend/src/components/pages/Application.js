import Navbar from "../home/HomeNav";
import ApplicationHero from "../application/ApplicationHero";
import ApplicationContent from "../application/ApplicationContent";
import Footer from "../home/HomeFooter";

function Application() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationContent />
      <Footer />
    </>
  );
}

export default Application;
