import Navbar from "../../home/HomeNav";
import ApplicationHero from "../../application-personal/ApplicationHero";
import ApplicationPersonalContent from "../../application-personal/ApplicationPersonalContent";
import Footer from "../../home/HomeFooter";

export default function ApplicationPersonal() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationPersonalContent />
      <Footer />
    </>
  );
}
