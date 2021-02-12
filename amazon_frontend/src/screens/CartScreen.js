import React from 'react';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const productImg = props.match.params.image;
    console.log(productImg);
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    return (<div>
        <h1>Hello User!</h1>

            <img className="medium" src={productImg} ></img>
        
        <p>
            productId: {productId}
               Qty: {qty} </p>
    </div>
    );
}
