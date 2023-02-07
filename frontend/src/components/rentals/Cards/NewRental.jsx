import React from 'react'
import styles from '../../styles/rentals/NewRentals.module.css'
import Cards from './Cards';

import Arrows from '../NextArrows/Arrows';

export default function NewRental({setOpenModal, displayCards}) {

  return (<>
    <div className={styles.rentalContaier}>
        <Cards setOpenModal={setOpenModal} displayCards={displayCards}/>
        <Arrows/>
      </div>
    </>
  )
}
