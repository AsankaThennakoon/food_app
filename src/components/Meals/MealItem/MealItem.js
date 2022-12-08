import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContex from '../../../store/cart-context';
import { useContext } from 'react';
const MealItem = (props) => {

  const cartCtx=useContext(CartContex);
  const price = `$${props.price.toFixed(2)}`;

  const onAmountSubmit=amount=>{
    cartCtx.addItem({

      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price,
      totalAmount:amount*props.price

    });

  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} onAmountSubmit={onAmountSubmit}/>

      </div>
    </li>
  );
};
export default MealItem;
