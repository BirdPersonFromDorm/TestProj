import React from 'react';
import Cart from "../components/Cart";

function Second(props) {
    return (
        <div>
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <div className="card-hero">
                            <img src={'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg'}
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

export default Second;
