import React from "react";
import Navbar from "../../components/home/HomeNavMenu/HomeNav";
import ApplicationHero from "../../components/application-personal/ApplicationHero";
import ApplicationLandlordContent from "../../components/application-landlord/ApplicationLandlordContent";
import Footer from "../../components/home/HomeFooter";

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
