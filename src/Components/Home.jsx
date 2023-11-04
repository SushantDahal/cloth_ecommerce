import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home  bg-[#f6f8fa]">
        <div className="home_container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg"
            alt="background"
            className="w-[100%] -z-1 h-[400px] home_img"
          />
          <div className="grid grid-cols-2 gap-4 ">
            <Product
              id="1"
              title="Small bag brown leather isolated on white background stock photo"
              price={11.99}
              rating={5}
              image="https://media.istockphoto.com/id/665536664/photo/small-bag-brown-leather-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=TpyV5W0Q9KgHHlYxF6q4pj2xODxHsA4bB6-svLgHvuA="
            />
            <Product
              id="2"
              title="
             
              Microwave ovens are a common kitchen appliance and are popular for reheating "
              price={29.97}
              rating={4}
              image="https://i5.walmartimages.com/seo/Mainstays-0-7-cu-ft-Countertop-Microwave-Oven-700-Watts-Black-New_0a982c74-197f-418d-b11b-84b7e2bbed2f.25ce9d5b7c11df7f5690617465e4cdbc.jpeg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 my-2">
            <Product
              id="3"
              title="speaker is someone who delivers a speech or a device that makes sounds louder."
              price={21.49}
              rating={4}
              image="https://5.imimg.com/data5/AN/YA/SP/SELLER-4466611/sound-speaker-500x500.jpg"
            />
            <Product
              id="4"
              title="Apple's iPhone 15 Pro and 15 Pro Max are defined by their refinements: a lighter body made from titanium, a USB-C port for charging and fast data transfers, "
              price={1600.99}
              rating={5}
              image="https://imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758834"
            />
            <Product
              id="5"
              title="The fourth-generation iPad Pro is a line of tablet computers designed. "
              price={801.99}
              rating={5}
              image="https://istore.com.ng/cdn/shop/products/iPad_ProM2_WiFi_Cellular_Silver_Position3_327e98de-a9ca-439e-8dd5-ed4156f66d85_1200x.png?v=1667400327"
            />
          </div>
          <div className="">
            <Product
              id="6"
              title="Review - Asus VG49VQ 49-inch Super Ultra Wide Monitor"
              price={501.99}
              rating={4}
              image="https://wargameguru.weebly.com/uploads/4/1/2/7/4127304/sec-pic-hot-1_orig.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
