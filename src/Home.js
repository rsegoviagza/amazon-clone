import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="319035781"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
          ></Product>
          <Product
            id="125686345"
            title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
            price={429.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41ehOZgmMML._AC_SY200_.jpg"
          ></Product>
        </div>

        <div className="home_row">
          <Product
            id="671278234"
            title="Lenovo Flex 5 14' 2-in-1 Laptop, 14.0' FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
            price={710.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41Sj6WWOXtL._AC_US160_.jpg"
          ></Product>
          <Product
            id="781267893"
            title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
            price={11.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41PpNHdOKJL._AC_US160_.jpg"
          ></Product>
          <Product
            id="891256790"
            title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
            price={34.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US160_.jpg"
          ></Product>
        </div>

        <div className="home_row">
          <Product
            id="178356792"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UY218_.jpg"
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
