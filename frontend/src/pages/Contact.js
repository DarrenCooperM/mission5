import Navbar from "../components/home/HomeNavMenu/HomeNav";
import ContactHero from "../components/contact/ContactHero";
import ContactContent from "../components/contact/ContactContent";
import Footer from "../components/home/HomeFooter";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Footer />
    </>
  );
}

export default Contact;
