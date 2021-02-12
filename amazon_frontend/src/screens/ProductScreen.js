import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import swal from 'sweetalert';
import data from '../data';

export default function ProductScreen(props) {
    const productId = props.match.params.id;
    const productImg = props.match.params.image;
    const [qty, setQty] = useState(1);
    const product = data.products.find(x => x._id === props.match.params.id);



    if (!product) {
        return <div> product not found !! </div>
    }
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId} ?${productImg} ?qty=${qty}`);
    };


    return <div>
        <Link to="/">Back to Home</Link>
        <div className="row top">
            <div className="col-2">
                <img className="medium" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1> {product.name} </h1>
                    </li>
                    <li>
                        Price: Rs. {product.price}
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body" >
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div> Rs. {product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="row">
                                    <div>Status</div>
                                    {product.countInStock > 0 ? (
                                        <span className="success">In Stock </span>
                                    ) :
                                        (
                                            <span className="error">Out Of Stock </span>
                                        )
                                    }

                                </div>
                            </div>

                        </li>
                        {product.countInStock > 0 && (
                            <>
                                <li>
                                    <div className="row">
                                        <div>Qty</div>
                                        <div>
                                            <select
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button
                                        onClick={addToCartHandler}
                                        className="primary block" >
                                        Add to Cart
                        </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    </div>;

}
