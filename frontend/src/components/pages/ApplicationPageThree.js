import React from "react";
import Navbar from "../home/HomeNav";
import ApplicationThreeContent from "../applicationzFinal/ApplicationThreeContent";
import ApplicationHero from "../application/ApplicationHero";
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
