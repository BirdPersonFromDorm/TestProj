import React from 'react';

function Cart({title, description, img}) {
    return (
        <div className="card">
            <div className="card-hero">
                <img src={img}
                    width="288"/>
            </div>
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Cart;
