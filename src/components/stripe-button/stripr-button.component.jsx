import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51L0qorSAlfWmbSDVf3aFZ74QD9CvyfFzb98jxiUhEaY2uFbYj2lYrIsAmP4zcIwcEFhcmdqOTRhiBd7EtGcpBoIt00JHc2SZRJ";

  const onToken = (token) => {
    axios({
      url: 'http://localhost:3001/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card');
    });
  };

  return (
    <StripeCheckout
      currency="USD"
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
