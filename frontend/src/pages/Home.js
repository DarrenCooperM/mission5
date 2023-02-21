import Navbar from "../components/home/HomeNavMenu/HomeNav";
import HomeHero from "../components/home/HomeHero";
import HomeContent from "../components/home/HomeContent";
import HomeBrands from "../components/home/HomeBrands";
import HomeSlider from "../components/home/homeReview/HomeSlider";
import HomeContact from "../components/home/HomeContact";
import HomeFooter from "../components/home/HomeFooter";
import { useState, useEffect } from "react";

function Home() {
  // Content hook
  const [displayContent, setDisplayContent] = useState("");
  // getting text content from db
  // useEffect hook - allows you to synchronize a component with an external system
  // used here to fetch data from this endpoint
  useEffect(() => {
    fetch("http://localhost:7070/home-content/content-info")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData); // set the state of displayContent with the data received (resultsData)
      });
  }, []); // empty dependency means this function will execute once
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeContent displayContent={displayContent} />
      <HomeBrands />
      <HomeSlider />
      <HomeContact />
      <HomeFooter />
    </>
  );
}

export default Home;
