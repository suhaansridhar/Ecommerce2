import React from 'react';
import image1 from "../assets/LouisVuitton_00.webp";
import image2 from "../assets/LouisVuitton_01.webp";
import image3 from "../assets/LouisVuitton_02.webp";
import image4 from "../assets/LouisVuitton_03.webp";
import image5 from "../assets/LouisVuitton_04.avif";
import image6 from "../assets/LouisVuitton_05.webp";
import image7 from "../assets/SaintLaurent_00.jpeg";
import image8 from "../assets/SaintLaurent_01.avif";
import image9 from "../assets/SaintLaurent_02.avif";
import image10 from "../assets/SaintLaurent_03.webp";
import image11 from "../assets/SaintLaurent_04.jpeg";
import { addToCart } from '../Cart/cartActionCreators';
import { connect } from 'react-redux';

function ItemsComponent({addToCart}) {
    const items = [
        {id: 1, name: "Louis Vuitton", src: image1, price: "200 euros", alt: "Louis Vuitton"},
        {id: 2, name: "Louis Vuitton", src: image2, price: "300 euros", alt: "Louis Vuitton"},
        {id: 3, name: "Louis Vuitton", src: image3, price: "400 euros", alt: "Louis Vuitton"},
        {id: 4, name: "Louis Vuitton", src: image4, price: "500 euros", alt: "Louis Vuitton"},
        {id: 5, name: "Louis Vuitton", src: image5, price: "210 euros", alt: "Louis Vuitton"},
        {id: 6, name: "Louis Vuitton", src: image6, price: "230 euros", alt: "Louis Vuitton"},
        {id: 7, name: "Louis Vuitton", src: image7, price: "240 euros", alt: "Louis Vuitton"},
        {id: 8, name: "Louis Vuitton", src: image8, price: "140 euros", alt: "Louis Vuitton"},
        {id: 9, name: "Louis Vuitton", src: image9, price: "620 euros", alt: "Louis Vuitton"},
        {id: 10, name: "Louis Vuitton", src: image10, price: "280 euros", alt: "Louis Vuitton"},
        {id: 11, name: "Louis Vuitton", src: image11, price: "975 euros", alt: "Louis Vuitton"}
    ];

    function handleClick(id){
        let temp = items.find(item => item.id === id);
        addToCart(temp);
    }

  return (
    <div>
      <h2>List of items:</h2>
      {items.map((item) => (
        <li key={item.id}>
            <h2>Name: {item.name}</h2>
            <img src={item.src} alt={item.alt} />
            <h3>Price: {item.price}</h3>
            <button onClick={() => handleClick(item.id)}>Add To Cart</button>
        </li>
      ))}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (item) => dispatch(addToCart(item))
    }
}


export default connect (null, mapDispatchToProps)(ItemsComponent)
