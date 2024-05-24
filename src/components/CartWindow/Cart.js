import React, {useContext} from "react";
import './Cart.css';
import Card from "../../UI/Card";
import ProjectData from "../../store/data";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";
import Button from "../../UI/Button";

const root = document.getElementById('root');

function Cart({setCartActive}) {
    const foodData = useContext(ProjectData);

    return createPortal(
        <React.Fragment>
        <div className="backdrop"></div>
        <Card className= "CartCard">
            <form onSubmit={() => alert('Your order has been accepted!')}>
                {foodData.Food.map((item) => {
                return item.amount > 0 ? (
                    <CartItem 
                    name = {item.name}
                    desc = {item.desc}
                    price = {item.price}
                    amount = {item.amount}
                    key = {item.name}
                />
                )
                 : null
            })}
            <div className="totalAmountContainer">
                <h3 className="totalAmountLabel">Total amount</h3>
                <p className="totalAmount">${foodData.FoodPrice.toFixed(2)}</p> 
            </div>
            <div className="closeAndOrderButtons">
                <Button className='closeButton' onClick={() => setCartActive(false)}>Close</Button>
                <Button type = 'submit' className='orderButton'>Order</Button>
            </div>
            </form>
        </Card>
        </React.Fragment>,
        root
        
    );
 
}

export default Cart;