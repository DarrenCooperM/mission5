import Navbar from "../home/HomeNav";
import ApplicationHero from "../application-personal/ApplicationHero";
import ApplicationContent from "../application-personal/ApplicationContent";
import Footer from "../home/HomeFooter";

export default function Application() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationContent />
      <Footer />
    </>
  );
}
