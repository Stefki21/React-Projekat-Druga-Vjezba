import React , {useContext} from "react";
import './CartItem.css';
import Button from "../../UI/Button";
import ProjectData from "../../store/data";

function CartItem (props) {
    const foodCtx = useContext(ProjectData);

    function plusButtonClickHandler () {
        foodCtx.FoodDispatcher({ name: props.name, amount: 1 })
    }

    function minusButtonClickHandler () {
        foodCtx.FoodDispatcher({ name: props.name, amount: -1 })
    }

    return (
        <div className="cartItemContainer">
            <h3>{props.name}</h3>
            <Button onClick={minusButtonClickHandler} className='minusButton'><p>-</p></Button>
            <Button onClick={plusButtonClickHandler} className='plusButton'><p>+</p></Button>
            <p className="cartPrice">${props.price}</p>
            <p className="cartAmount">x {props.amount}</p>
            <hr className="cartLine"></hr>
        </div>
    )
}

export default CartItem;