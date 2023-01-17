import React from "react";
import Navbar from "../home/HomeNav";
import ApplicationHero from "../application/ApplicationHero";
import ApplicationTwoContent from "../applicationTwo/ApplicationTwoContent";
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
