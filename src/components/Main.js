import React, {useContext} from 'react';
import './Main.css';
import RestaurantTable from '../images/RestaurantTable.PNG';
import Card from '../UI/Card';
import Hero from './Hero';
import ProjectData from '../store/data';
import FoodItem from './FoodItem';

function Main () {
    const foodCtx = useContext(ProjectData);

    return (
        <main>
            <img src={RestaurantTable} className='diagonal-cut' alt='a restaurant table'/>
            <Hero />
            <Card className='foodCard'>
                {foodCtx.Food.map((item) => 
                    <FoodItem 
                    name = {item.name}
                    desc = {item.desc}
                    price = {item.price}
                    key = {item.name}
                />
    )}
            </Card>
        </main>
    )
}

export default Main;
