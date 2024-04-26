import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../Cart/cartActionCreators';

function CartComponent({ cart, removeFromCart }) {
    let len = cart.length;
  return (
    <div>
        <h1>Cart: {len}</h1>
        {cart.map((item) => (
            <li key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.src} alt={item.alt} />
                <h3>{item.price}</h3>
                <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
            </li>
        ))}
    </div>
  )
}

const mapStateToProps = state => {
    return{
        cart: state.cartReducer
    }
}

const mapDispatchToPros = dispatch => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(CartComponent)
