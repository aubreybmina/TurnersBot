import React from "react";
import { FaRoad } from "react-icons/fa";
import car1 from "./images/cars/2020-suzuki-baleno-23437007_16513252_gallery.jpg";
import car2 from "./images/cars/2014-toyota-aqua-23169551_16327201_gallery.jpg";
import car3 from "./images/cars/2014-mazda-demio-23197037_16235239_gallery.jpg";
import car4 from "./images/cars/2014-hyundai-santa-fe-23351388_16342823_gallery.jpg";
import car5 from "./images/cars/2012-mazda-axela-23461945_16526516_gallery.jpg";
import car6 from "./images/cars/2011-toyota-camry-23299843_16396965_gallery.jpg";

const PropertyCard = () => {

  return (
    <div className="cars">  
      <div className="cars__card">
        <div className="cars__card--image">
        <img className='cars__card--photo'
                src= {car1} alt="2020 Suzuki Baleno GLX"
              /> 
          <div className="cars__card--image--carname" >2020 Suzuki Baleno GLX</div>
          <div className="cars__card--image--status" >FOR AUCTION</div>
        </div>
        <div className="cars__card--text">
          <h3>Price: $17,220</h3>
          <p>Location: Wellington - Porirua</p> 
          <p><FaRoad/> 66,820 km</p> 
        </div>
      </div>    

      <div className="cars__card">
        <div className="cars__card--image">
        <img className='cars__card--photo'
                src= {car2} alt="2014 Toyota Aqua"
              /> 
          <div className="cars__card--image--carname" >2014 Toyota Aqua</div>
          <div className="cars__card--image--status" >FOR SALE</div>
        </div>
        <div className="cars__card--text">
          <h3>Price: $14,680</h3>
          <p>Location: Penrose - Great South Road</p> 
          <p><FaRoad/> 104,365 km</p> 
        </div>
      </div> 

      <div className="cars__card">
        <div className="cars__card--image">
        <img className='cars__card--photo'
                src= {car3} alt="2014 Mazda Demio"
              /> 
          <div className="cars__card--image--carname" >2014 Mazda Demio</div>
          <div className="cars__card--image--status" >FOR AUCTION</div>
        </div>
        <div className="cars__card--text">
          <h3>Price: $14,180</h3>
          <p>Location: Otahuhu</p> 
          <p><FaRoad/> 115,210 km</p> 
        </div>
      </div> 

      <div className="cars__card">
        <div className="cars__card--image">
        <img className='cars__card--photo'
                src= {car4} alt="2014 Hyundai Sta Fe DM 4WD"
              /> 
          <div className="cars__card--image--carname" >2014 Hyundai Sta Fe DM 4WD</div>
          <div className="cars__card--image--status" >FOR SALE</div>
        </div>
        <div className="cars__card--text">
          <h3>Price: $10,820</h3>
          <p>Location: Tauranga</p> 
          <p><FaRoad/> 327,615 km</p> 
        </div>
      </div>
      
      <div className="cars__card">
        <div className="cars__card--image">
        <img className='cars__card--photo'
                src= {car5} alt="2012 Mazda Axela Skyativ I-Stop"
              /> 
          <div className="cars__card--image--carname" >2012 Mazda Axela Skyativ I-Stop</div>
          <div className="cars__card--image--status" >FOR AUCTION</div>
        </div>
        <div className="cars__card--text">
          <h3>Price: $14,225</h3>
          <p>Location: Palmerston North</p> 
          <p><FaRoad/> 67,024 km</p> 
        </div>
      </div>
      
      <div className="cars__card">
        <div className="cars__card--image">
        <img className='cars__card--photo'
                src= {car6} alt="2011 Toyota Camry Hybrid"
              /> 
          <div className="cars__card--image--carname" >2011 Toyota Camry Hybrid</div>
          <div className="cars__card--image--status" >FOR SALE</div>
        </div>
        <div className="cars__card--text">
          <h3>Price: $17,730</h3>
          <p>Location: Manukau</p> 
          <p><FaRoad/> 86,322 km</p> 
        </div>
      </div>

  </div>
    
  );
};

export default PropertyCard; 