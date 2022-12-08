import {  useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {


  const [isCartShow,setIsCartShow] =useState(false);

  const onCartShowHandler=()=>{
    setIsCartShow(true);
    
  }

  const onCartCloseHandler=()=>{
    setIsCartShow(false);

  }
  return (
    <CartProvider>
      {isCartShow && <Cart onCartClose={onCartCloseHandler}></Cart>}
      <Header onCartShow={onCartShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
