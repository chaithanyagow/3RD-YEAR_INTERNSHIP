import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
import { RootState } from '../store';

const CartPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Start adding items!</p>
            ) : (
                <Cart items={cartItems} />
            )}
        </div>
    );
};

export default CartPage;