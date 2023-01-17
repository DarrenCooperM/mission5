import Navbar from "../../home/HomeNav";
import ApplicationHero from "../../application-personal/ApplicationHero";
import ApplicationSubmissionContent from "../../application-submission/ApplicationSubmissionContent";
import Footer from "../../home/HomeFooter";

export default function ApplicationSubmission() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationSubmissionContent />
      <Footer />
    </>
  );
}
