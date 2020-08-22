import React from 'react';
import { useStateValue  } from './StateProvider';

function Checkout(){
   
    const [{basket}] = useStateValue();

    return <div className="chcekout">
        <img className="checkout_as"
        src=""
        alt=""/>

        {basket?.length === 0 ?(
        <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no item. To buy item please Go to home</p>
        </div>
        ) :(
            <div>
                <h2 className="checkout_title">
                    Your Shopping basket
                    List of ALl the products
                </h2>
               </div> 
        )}
    </div>
}

export default Checkout;