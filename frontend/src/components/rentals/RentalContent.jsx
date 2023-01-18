import React from "react";
import styles from "../styles/rentals/RentalContent.module.css";
import { useState, useEffect } from "react";
import bedImg from "../icons/bed.png";
import bathImg from "../icons/bath.png";
import mailImg from "../icons/mail.png";


export default function RentalContent() {
    // text content state
    const [displayContent, setDisplayContent] = useState("");
    // image state
    const [imageURL, setImageURL] = useState("");

      // getting content from db
  useEffect(() => {
    fetch("http://localhost:7070/rental/rental")
      .then((res) => res.json())
      .then((resultsData) => {
        console.log(resultsData);
        setDisplayContent(resultsData);
      });
  }, []);

  // getting the image from db
  useEffect(() => {
    fetch("http://localhost:7070/home-content/home-content-images")
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        setImageURL(imageData);
      });
  }, []);


  
  return (
    <>
   
    <div className="album py-5">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
        {/* card 1 */}
        <div className="col">
          <div className="card bg-light shadow-sm">
            <div className={styles.rentalImage}>  
              <img  className="card-img-top" width="100%" height="225" src={imageURL && imageURL[0].url} alt="rental property" />
              <i class={styles.iconMail}><img src={mailImg} alt=""/></i>
            </div>
        
            <div className="card-body">
              {/* top row */}
            <div className="row row-cols-3">
                <div className="col">
                  <p className={styles.pill}>Available</p>
                </div>      
                <div className="col">
                <p className={styles.pill}>Gym</p>
                </div> 
                <div className="col">
                <p className={styles.pill}>Pets OK</p>
                </div>   
              </div>
              {/* 2nd row */}
            <div className="row row-cols-3">
              {/* address */}
                <div className="col">
                  <h1 className={styles.address}> {displayContent && displayContent[0].address}</h1>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                </div>   
              </div>
              {/* 3rd row */}
              <div className="row row-cols-3">
                <div className="col">
                <p> ${displayContent && displayContent[0].rent}/W</p>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                 
                </div>   
              </div>
              {/* 4th row */}
              <div className="row row-cols-4">
                <div className="col-4">
                  
                <span className={styles.amenities}><img height="48" src={bedImg} alt="beds" /><p> {displayContent && displayContent[0].beds}</p></span>
                
                </div>      
                <div className="col-4">
                <span className={styles.amenities}><img   height="56" src={bathImg} alt="baths" /><p>{displayContent && displayContent[0].baths}</p></span>
                </div> 
                <div className="col-1">
                  
                </div> 
                <div className="col-3">
                  <div className="btn-group">
                    <button type="button" className={styles.btnRed}>View More</button>
                  </div>
                </div>   
              </div>
            </div>
          </div>
        </div>
{/* card 2 */}
        <div className="col">
          <div className="card bg-light shadow-sm">
            <div className={styles.rentalImage}>  
              <img  className="card-img-top" width="100%" height="225" src={imageURL && imageURL[1].url} alt="rental property" />
              <i class={styles.iconMail}><img src={mailImg} alt=""/></i>
            </div>
        
            <div className="card-body">
              {/* top row */}
            <div className="row row-cols-3">
                <div className="col">
                  <p className={styles.pill}>Available</p>
                </div>      
                <div className="col">
                <p className={styles.pill}>Gym</p>
                </div> 
                <div className="col">
                <p className={styles.pill}>Pets OK</p>
                </div>   
              </div>
              {/* 2nd row */}
            <div className="row row-cols-3">
              {/* address */}
                <div className="col">
                  <h1 className={styles.address}> {displayContent && displayContent[1].address}</h1>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                </div>   
              </div>
              {/* 3rd row */}
              <div className="row row-cols-3">
                <div className="col">
                <p> ${displayContent && displayContent[1].rent}/W</p>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                 
                </div>   
              </div>
              
              {/* 4th row */}
              <div className="row row-cols-4">
                <div className="col-4">
                  
                <span className={styles.amenities}><img height="48" src={bedImg} alt="beds" /><p> {displayContent && displayContent[1].beds}</p></span>
                
                </div>      
                <div className="col-4">
                <span className={styles.amenities}><img   height="56" src={bathImg} alt="baths" /><p>{displayContent && displayContent[1].baths}</p></span>
                </div> 
                <div className="col-1">
                  
                </div> 
                <div className="col-3">
                  <div className="btn-group">
                    <button type="button" className={styles.btnRed}>View More</button>
                  </div>
                </div>   
              </div>
            </div>
          </div>
        </div>
{/* card 3 */}
        <div className="col">
          <div className="card bg-light shadow-sm">
            <div className={styles.rentalImage}>  
              <img  className="card-img-top" width="100%" height="225" src={imageURL && imageURL[2].url} alt="rental property" />
              <i class={styles.iconMail}><img src={mailImg} alt=""/></i>
            </div>
        
            <div className="card-body">
              {/* top row */}
            <div className="row row-cols-3">
                <div className="col">
                  <p className={styles.pill}>Available</p>
                </div>      
                <div className="col">
                <p className={styles.pill}>Gym</p>
                </div> 
                <div className="col">
                <p className={styles.pill}>Pets OK</p>
                </div>   
              </div>
              {/* 2nd row */}
            <div className="row row-cols-3">
              {/* address */}
                <div className="col">
                  <h1 className={styles.address}> {displayContent && displayContent[2].address}</h1>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                </div>   
              </div>
              {/* 3rd row */}
              <div className="row row-cols-3">
                <div className="col">
                <p> ${displayContent && displayContent[2].rent}/W</p>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                 
                </div>   
              </div>
              {/* 4th row */}
              <div className="row row-cols-4">
                <div className="col-4">
                  
                <span className={styles.amenities}><img height="48" src={bedImg} alt="beds" /><p> {displayContent && displayContent[2].beds}</p></span>
                
                </div>      
                <div className="col-4">
                <span className={styles.amenities}><img   height="56" src={bathImg} alt="baths" /><p>{displayContent && displayContent[2].baths}</p></span>
                </div> 
                <div className="col-1">
                  
                </div> 
                <div className="col-3">
                  <div className="btn-group">
                    <button type="button" className={styles.btnRed}>View More</button>
                  </div>
                </div>   
              </div>
            </div>
          </div>
        </div>

{/* card 4 */}
        <div className="col">
          <div className="card bg-light shadow-sm">
            <div className={styles.rentalImage}>  
              <img  className="card-img-top" width="100%" height="225" src={imageURL && imageURL[1].url} alt="rental property" />
              <i class={styles.iconMail}><img src={mailImg} alt=""/></i>
            </div>
        
            <div className="card-body">
              {/* top row */}
            <div className="row row-cols-3">
                <div className="col">
                  <p className={styles.pill}>Available</p>
                </div>      
                <div className="col">
                <p className={styles.pill}>Gym</p>
                </div> 
                <div className="col">
                <p className={styles.pill}>Pets OK</p>
                </div>   
              </div>
              {/* 2nd row */}
            <div className="row row-cols-3">
              {/* address */}
                <div className="col">
                  <h1 className={styles.address}> {displayContent && displayContent[3].address}</h1>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                </div>   
              </div>
              {/* 3rd row */}
              <div className="row row-cols-3">
                <div className="col">
                <p> ${displayContent && displayContent[3].rent}/W</p>
                </div>      
                <div className="col">
                  
                </div> 
                <div className="col">
                 
                </div>   
              </div>
              {/* 4th row */}
              <div className="row row-cols-4">
                <div className="col-4">
                  
                <span className={styles.amenities}><img height="48" src={bedImg} alt="beds" /><p> {displayContent && displayContent[3].beds}</p></span>
                
                </div>      
                <div className="col-4">
                <span className={styles.amenities}><img   height="56" src={bathImg} alt="baths" /><p>{displayContent && displayContent[3].baths}</p></span>
                </div> 
                <div className="col-1">
                  
                </div> 
                <div className="col-3">
                  <div className="btn-group">
                    <button type="button" className={styles.btnRed}>View More</button>
                  </div>
                </div>   
              </div>
            </div>
          </div>
        </div>


       



        </div>
    </div>
</div>
    


    
    
    </>
    
  );
}
