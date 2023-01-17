import React from "react";
import Navbar from "../home/HomeNav";
import ApplicationThreeContent from "../application-privacy/ApplicationThreeContent";
import ApplicationHero from "../application-personal/ApplicationHero";
import Footer from "../home/HomeFooter";

export default function ApplicationPageTwo() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationThreeContent />
      <Footer />
    </>
  );
}
