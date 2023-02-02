import Navbar from "../home/HomeNav";
import HomeFooter from "../home/HomeFooter";
// import RentalsContent from "../rentals/RentalContent";
import NewRental from "../rentals/NewRental";
import RentalModal from "../rentals/RentalModal";
import { useState, useEffect } from "react";

function Rentals() {
  const [displayCards, setDisplayCards] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7070/rental/rental")
      .then((res) => res.json())
      .then((resultsData) => {
        // console.log(resultsData);
        setDisplayCards(resultsData);
      });
  }, []);

  return (
    <>
      <Navbar />
      {openModal && <RentalModal closeModal={setOpenModal} />}
      {/* oepn modal variable is used to determine whether or not the 
      rentalmodal component is rendered. if openModal is true the 
      rentalmodal componenet will be rendered */}

      {/* <RentalsContent setOpenModal={setOpenModal} /> */}
      <NewRental setOpenModal={setOpenModal} displayCards={displayCards} />
      <HomeFooter />
    </>
  );
}

export default Rentals;
