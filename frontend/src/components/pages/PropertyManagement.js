import React from "react";
import Navbar from "../home/HomeNav";
import PropsManage from "../PropertyManagement/PropsManage";
import HomeContact from "../home/HomeContact";
import Footer from "../home/HomeFooter";

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
