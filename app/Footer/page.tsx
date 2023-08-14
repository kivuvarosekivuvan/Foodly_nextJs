import React from "react";

const footerStyles = {
  padding: '20px',
  textAlign: 'center',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '10px',
  margin: '5%',
  backgroundColor: 'rgb(252, 230, 189)'
};

const listStyles = {
  listStyle: 'none',
  padding: '20px',
  fontSize: 'large',
  color: '#333'
};

const allStyles = {
  fontSize: 'medium',
  color: '#333'
};

const h3Styles = {
  fontSize: 'x-large',
  color: 'rgb(255, 30, 0)'
};

const Footer = () => {
  return (
    <div>
      <footer style={footerStyles}>
        <div className="footers">
          <h3 style={h3Styles}>Fooodish</h3>
          <p style={allStyles}>Continue Fooodish 2023 all rights reserved</p>
          <h3 style={h3Styles}>Follow us On</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="footers">
          <h3 style={h3Styles}>Menu</h3>
          <ul>
            <li style={listStyles}>Home</li>
            <li style={listStyles}>Offers</li>
            <li style={listStyles}>Service</li>
            <li style={listStyles}>About Us</li>
          </ul>
        </div>
        <div className="footers">
          <h3 style={h3Styles}>Information</h3>
          <ul>
            <li style={listStyles}>Menu</li>
            <li style={listStyles}>Quality</li>
            <li style={listStyles}>Make a choice</li>
            <li style={listStyles}>Salad with Vegetable</li>
            <li style={listStyles}>Fast Delivery</li>
            <li style={listStyles}>Subscribe</li>
          </ul>
        </div>
        <div className="footers">
          <h3 style={h3Styles}>Contact</h3>
          <ul>
            <li style={listStyles}>+123456789</li>
            <li style={listStyles}>Explore</li>
            <li style={listStyles}>info@foodish.com</li>
            <li style={listStyles}>1245, NewYork, USA</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
