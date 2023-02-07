import Navbar from "../../home/HomeNavMenu/HomeNav";
import ApplicationHero from "../../application-personal/ApplicationHero";
import ApplicationSubmissionContent from "../../application-submission/ApplicationSubmissionContent";
import Footer from "../../home/HomeFooter";
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
