import React from 'react';
import Cart from "../components/Cart";

function Third(props) {
    return (
        <div>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <div className="card-hero">
                            <img src={'https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335__340.jpg'}
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

export default Third;
