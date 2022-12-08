import { useContext } from "react";
import CartContex from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {


  const cartCtx=useContext(CartContex);
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const isNoItem=cartCtx.items.length===0;

  const onRemoveHandler=(id)=>{
    cartCtx.removeItem(id);

  }

  const onAddHandler=(item)=>{

    cartCtx.addItem(item);

  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
          key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={onRemoveHandler.bind(null,item.id)}
            onAdd={onAddHandler.bind(null,item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onCartClose={props.onCartClose}>
      <div className={classes.cart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onCartClose}>Close</button>
          {!isNoItem&&<button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
