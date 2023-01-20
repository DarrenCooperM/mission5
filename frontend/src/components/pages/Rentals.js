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
      {/* <RentalsContent setOpenModal={setOpenModal} /> */}
      <NewRental setOpenModal={setOpenModal} />
      <HomeFooter />
    </>
  );
}

export default Rentals;
