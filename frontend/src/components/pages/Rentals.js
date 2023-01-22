import Navbar from "../home/HomeNav";
import HomeFooter from "../home/HomeFooter";
import RentalsContent from "../rentals/RentalContent";
import NewRental from "../rentals/NewRental";
import RentalModal from "../rentals/RentalModal";
import { useState } from "react";

function Rentals() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar />
      {openModal && <RentalModal closeModal={setOpenModal} />}
      {/* oepn modal variable is used to determine whether or not the 
      rentalmodal component is rendered. if openModal is true the 
      rentalmodal componenet will be rendered */}

      {/* <RentalsContent setOpenModal={setOpenModal} /> */}
      <NewRental setOpenModal={setOpenModal} />
      <HomeFooter />
    </>
  );
}

export default Rentals;
