import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

const MenuItem = ({ imageUrl, name, ratings, price }) => {
  const renderStars = () => {
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} style={{color:"#F4BB44"}} icon={faStar} />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" style={{color:"#F4BB44"}} icon={faStarHalfAlt} />);
    }
    return stars;
  };
  
  return (
    <div className="menu-item">
      <div className="circle-background">
        <Image src={imageUrl} alt={name} width={150} height={150} />
      </div>
      <div className="menu-item-details">
        <h6 style={{fontFamily:"'ubuntu', sans-serif", fontSize:"20px"}}>{name}</h6>
        <div className="star-icons">{renderStars()}</div>
        <div style={{display:"flex"}}>
          <p style={{fontSize:"20px", fontWeight:"bold"}}>${price}</p>
          <button className="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default MenuItem;
