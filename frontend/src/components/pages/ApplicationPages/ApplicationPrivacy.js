import React from "react";
import Navbar from "../../home/HomeNavMenu/HomeNav";
import ApplicationPrivacyContent from "../../application-privacy/ApplicationPrivacyContent";
import ApplicationHero from "../../application-personal/ApplicationHero";
import Footer from "../../home/HomeFooter";

export default function ApplicationPrivacy() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationPrivacyContent />
      <Footer />
    </>
  );
}
