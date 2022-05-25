import React from 'react';
import Cart from "./Cart";

function MainInfo(props) {

    const data = [
        {
            title: 'Cart First',
            description: 'Description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Second',
            description: 'description',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg'
        },
        {
            title: 'Cart Third',
            description: 'description',
            img: 'https://www.worldbank.org/content/dam/photos/780x439/2022/jan-2/deep-blue-sea_shutterstock_1512728810.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
        {
            title: 'Cart Fourth',
            description: 'description',
            img: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg'
        },
    ]

    return (
        <div className="container">
            <div className="cards">
                {data &&
                data.map((item) => <Cart
                    title={item.title}
                    description={item.description}
                    img={item.img}/>)
                }
            </div>
        </div>
    );
}

export default MainInfo;
