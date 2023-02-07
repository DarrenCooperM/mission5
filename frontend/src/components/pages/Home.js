import Navbar from "../home/HomeNavMenu/HomeNav";
import HomeHero from "../home/HomeHero";
import HomeContent from "../home/HomeContent";
import HomeBrands from "../home/HomeBrands";
import HomeSlider from "../home/homeReview/HomeSlider";
import HomeContact from "../home/HomeContact";
import HomeFooter from "../home/HomeFooter";
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
