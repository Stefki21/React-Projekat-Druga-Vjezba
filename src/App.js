import React, {useState, useContext, useEffect} from "react";
import ProjectData from "./store/data";
import Main from "./components/Main";
import Header from "./components/Header";
import Cart from "./components/CartWindow/Cart";


function App() {
  const foodCtx = useContext(ProjectData);

  const [CartActive, setCartActive] = useState(false);

  useEffect(() => {
    if (foodCtx.FoodCounter === 0) {
      setCartActive(false);
    } 
  }, [foodCtx.FoodCounter])

  return (
    <React.Fragment>
      <Header setCartActive={setCartActive}></Header>
      <Main></Main>
      {(foodCtx.FoodCounter > 0 && CartActive) ? 
                <Cart setCartActive={setCartActive}/> : null
        }
    </React.Fragment>
  );
}

export default App;
