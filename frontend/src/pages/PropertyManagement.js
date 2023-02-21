import React from "react";
import Navbar from "../components/home/HomeNavMenu/HomeNav";
import PropsManage from "../components/PropertyManagement/PropsManage";
import HomeContact from "../components/home/HomeContact";
import Footer from "../components/home/HomeFooter";

export default function PropertyManagement() {
  return (
    <>
      <Navbar />
      <PropsManage />
      <HomeContact />
      <Footer />
    </>
  );
}
