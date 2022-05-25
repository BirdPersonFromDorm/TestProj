import React from 'react';
import Cart from "../components/Cart";

function Fourth(props) {
    return (
        <div>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <div className="card-hero">
                            <img src={'https://media.istockphoto.com/photos/turquoise-olive-green-gentle-breeze-ocean-wave-during-summer-tide-picture-id1177812331?k=20&m=1177812331&s=612x612&w=0&h=bl2nUwoM9LEYev2o5ZoAuQvGfp9xKMDZ5h0MNcpVpzY='}
                                 width="288"/>
                        </div>
                        <div className="card-header">
                            <h3>title</h3>
                        </div>
                        <div className="card-body">
                            <p>description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fourth;
