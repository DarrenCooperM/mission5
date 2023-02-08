import Navbar from "../../components/home/HomeNavMenu/HomeNav";
import ApplicationHero from "../../components/application-personal/ApplicationHero";
import ApplicationSubmissionContent from "../../components/application-submission/ApplicationSubmissionContent";
import Footer from "../../components/home/HomeFooter";
import { useState } from "react";

export default function ApplicationSubmission() {
  const [fontSize, setFontSize] = useState(14);
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationSubmissionContent
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <Footer />
    </>
  );
}
