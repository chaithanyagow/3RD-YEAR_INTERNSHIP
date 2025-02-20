import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../services/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleCheckout = () => {
        // Logic for checkout process
    };

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;