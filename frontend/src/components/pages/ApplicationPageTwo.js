import React from "react";
import Navbar from "../home/HomeNav";
import ApplicationHero from "../application-personal/ApplicationHero";
import ApplicationTwoContent from "../application-landlord/ApplicationTwoContent";
import Footer from "../home/HomeFooter";

export default function ApplicationPageTwo() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationTwoContent />
      <Footer />
    </>
  );
}
