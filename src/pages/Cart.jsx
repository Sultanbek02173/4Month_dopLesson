import { CartProduct } from "../components";
import { OrderSum } from "../components";

export const Cart = ({ cart, setCart }) => {
    return (
        <div className="container">
            <h2>Your cart</h2>
            <CartProduct cart={cart} setCart={setCart}/>
            <OrderSum cart={cart}/>
        </div>
    );
}

