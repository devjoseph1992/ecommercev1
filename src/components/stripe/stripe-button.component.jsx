import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HmyAsGHnZ3toQlsGCekocl8aV1X8NN14OK44u0buEsrbG23r0Vmq0VEj2D65nmMDjhAubuLD3t6J3m71xnJ0s8Y00uhEDzeZS';

    const onToken = token =>{
        console.log(token);
        alert('Paymen Successful');
    }
    return(
        <StripeCheckOut
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton