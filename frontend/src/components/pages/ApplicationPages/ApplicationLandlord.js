import React from "react";
import Navbar from "../../home/HomeNav";
import ApplicationHero from "../../application-personal/ApplicationHero";
import ApplicationLandlordContent from "../../application-landlord/ApplicationLandlordContent";
import Footer from "../../home/HomeFooter";

export default function ApplicationLandlord() {
  return (
    <>
      <Navbar />
      <ApplicationHero />
      <ApplicationLandlordContent />
      <Footer />
    </>
  );
}
