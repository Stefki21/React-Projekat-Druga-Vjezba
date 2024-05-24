import { useContext } from "react";
import ProjectData from "../store/data";
import Button from "../UI/Button";
import "./Header.css"

function Header ({setCartActive}) {
    const dataCtx = useContext(ProjectData);

    return (
        <header>
            <h1>ReactMeals</h1>
            <Button className='cartButton' onClick={() => {if(dataCtx.FoodCounter > 0 ){setCartActive(true)}else{alert('Your cart is empty. Please select some items to buy.')} }}><i className="fa fa-shopping-cart" style={{'fontSize':'1.25rem'}} ></i> 
            <p className="CartTXT">Your Cart</p>
            <span className="numberOfCartItems">{dataCtx.FoodCounter}</span>
            </Button>
        </header>
    )
}

export default Header;