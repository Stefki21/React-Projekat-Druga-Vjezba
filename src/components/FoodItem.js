import React, {useContext, useRef} from 'react';
import ProjectData from '../store/data';
import './FoodItem.css';
import Button from '../UI/Button';


function FoodItem (props) {
    const foodCtx = useContext(ProjectData);
    const amountOfFood = useRef(null);

    const handleAddFood = () => {
        const amount = parseInt(amountOfFood.current.value);
        foodCtx.FoodDispatcher({ name: props.name, amount: amount });
    };

    return (
        <div className="foodItemContainer">
            <h3 className='foodName'>{props.name}</h3>
            <label htmlFor= {`${props.name} amount`} className='amountLabel'>Amount </label> 
            <input type='number' id={`${props.name} amount`} defaultValue={1} name={props.name} ref={amountOfFood} />
            <p className='foodDesc'>{props.desc}</p>
            <Button onClick={handleAddFood}>+ Add</Button>
            <p className='foodPrice'>${props.price}</p>
            <hr />
        </div>
    )
}

export default FoodItem;