import React from "react";
import Navbar from "../../components/home/HomeNavMenu/HomeNav";
import ApplicationPrivacyContent from "../../components/application-privacy/ApplicationPrivacyContent";
import ApplicationHero from "../../components/application-personal/ApplicationHero";
import Footer from "../../components/home/HomeFooter";

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
