import React, {useReducer} from "react";

const ProjectData = React.createContext({
    Food: [],
    FoodDispatcher: null,
    FoodCounter: null,
    FoodPrice: null,
})

function foodReducer(state, action) {
    return state.map(item =>
        item.name === action.name ? { ...item, amount: item.amount + action.amount}
        :item
    )
   
}

export function DataProvider (props) {
    const [foodState, dispatchFoodState] = useReducer(foodReducer, [
        {
            name: 'Sushi',
            desc: 'Finest fish and veggies',
            price: 22.99,
            amount: 0
        },
        {
            name: 'Schnitzel',
            desc: 'A german specialty!',
            price: 16.50,
            amount: 0
        },
        {
            name: 'Barbecue Burger',
            desc: 'American, raw, meaty',
            price: 12.99,
            amount: 0
        },
        {
            name: 'Green Bowl',
            desc: 'Healthy...and green...',
            price: 18.99,
            amount: 0
        }
    ])

    let counter = 0;
    for (const item of foodState) {
        counter += item.amount;
    }

    let totalPrice = foodState.reduce((sum, item) => sum + item.price * item.amount, 0)

    return (
        <ProjectData.Provider
            value={{
                Food: foodState,
                FoodDispatcher: dispatchFoodState,
                FoodCounter: counter,
                FoodPrice: totalPrice,
            }}
        >
            {props.children}
        </ProjectData.Provider>
    );

};

export default ProjectData;