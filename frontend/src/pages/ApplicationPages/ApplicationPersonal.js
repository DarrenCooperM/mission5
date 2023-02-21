import Navbar from "../../components/home/HomeNavMenu/HomeNav";
import ApplicationHero from "../../components/application-personal/ApplicationHero";
import ApplicationPersonalContent from "../../components/application-personal/ApplicationPersonalContent";
import Footer from "../../components/home/HomeFooter";

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
