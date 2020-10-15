import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const customEnterAnimation = {
    from: { transform: "scale(0.5, 1)" },
    to: { transform: "scale(1, 1)" },
  };

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg"
          alt=""
          className="checkout_Ad"
        />
        <div>
          <h3 className="checkout_hello">Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>
          <FlipMove enterAnimation={customEnterAnimation}>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
