import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./UI/CartItem.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem 
                        name={item.name} 
                        qty={item.quantity} 
                        price={item.price} 
                        key={item.id}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    />
                ))}
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart}>Got to CHeckout</Button>
            </p>
        </Modal>
    )
}