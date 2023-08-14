import React from "react";
import Navbar from "../Navbar/page"


const FastFoodPage: React.FC = () => {
  return (
    <div>
      <Navbar/>

      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Foodle</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav2" href="#">Offer</a>
              </li>
              <li className="nav-item">
                <a className="nav3" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav4" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav5" href="#">About Us</a>
              </li>
               <li className="nav-item">
                  <a className="nav6" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="custom-signup-btn" href="#">Sign Up</a>
                </li>

            </ul>
          </div>
        </div>
      </nav>



      <h1 style={{ fontSize: '70px', color: 'rgb(228, 71, 71)', marginLeft: '30px', marginTop: '5%' }}>All fast food is<br /><br />Available at Foodle</h1>

      <img src="/Images/sandwich.png" style={{ marginLeft: '1000px', marginTop: '-17%' }} id="image" />

      <h3 style={{ color: 'gray', marginTop: '-10%', marginLeft: '300px' }}>We Are Just A Click Away When You<br /><br />Crave For Delicious Fast Food</h3>
      <button style={{ backgroundColor: 'rgb(228, 71, 71)', border: '20px', borderRadius: '20px', marginLeft: '90px', padding: '8px 16px', color: '#fff', fontSize: '30px' }} className="buy">Buy Now</button>
      <h3 style={{ marginLeft: '350px', marginTop: '-2%', fontSize: '30px' }} className="order">How To Order</h3>
      <div style={{ backgroundColor: 'rgb(234, 241, 241)', height: '200px', marginTop: '-2%', marginLeft: '160px', marginRight: '160px', border: '20px', borderRadius: '20px' }} className="deliver">
        <div style={{ marginLeft: '200px', marginTop: '11%' }} className="fast">
          <h1>Fast Delivery</h1>
          <p style={{ color: 'gray', fontSize: '20px' }} className="f">The Food Will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
        </div>

        <div style={{ marginLeft: '800px', marginTop: '-10%' }} className="fresh">
          <h1 >Fresh Food</h1>
          <p style={{ color: 'gray', fontSize: '20px' }} className="f">Your Food Will Be Delivered To <br />100% Fresh To Your Home.We <br />Do not Deliver Stale Food</p>
        </div>

        <div style={{ marginLeft: '1200px', marginTop: '-10%' }} className="free">
          <h1>Free Delivery</h1>
          <p style={{ color: 'gray', fontSize: '20px' }} className="f">Your Food  Delivery Is <br />Absolutely Free. No cost<br />Just Order And Enjoy.</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '150px', marginRight: '150px', marginTop: '100px' }} className="bestD">
      </div>
      <img src="" style={{ marginLeft: '200px', marginTop: '5%' }} id="buy" />

      <h1 style={{ marginTop: '200px', marginLeft: '800px' }} className="our"> Our <span style={{ color: "rgb(255, 30, 0" }}>Regular</span> Menu</h1>
      <div style={{ marginLeft: '600px', fontSize: '22px' }} className="header">
        <p>These Are Our Regular Menus. You Can Order Anything You Like.</p>
        <button style={{ padding: '10px 30px', border: 'none', backgroundColor: 'rgb(255, 30, 0)', color: 'white', fontSize: '20px', fontWeight: '600', borderRadius: '20px' }} className="see-all">See All</button>
      </div>
    </div>
  );
}

export default FastFoodPage;
