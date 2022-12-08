
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContex from '../../store/cart-context';
const HeaderCartButton=props=>{

const cartCtx=useContext(CartContex);
const [isButtonBump,setIsButtonBump]=useState(true);
const { items } =cartCtx;

const numberOfItem=cartCtx.items.reduce((previousValue,item)=>{

   return previousValue+item.amount;
},0);

const buttonClassName=`${classes.button} ${isButtonBump? classes.bump:''} `;
useEffect(()=>{

    if(items.length===0){
        return;
    }
    setIsButtonBump(true);
    const timer = setTimeout(() => {
        setIsButtonBump(false)
    
    }, 300);

    return ()=>{
        clearTimeout(timer);
    }
},[items])


return <button className={buttonClassName} onClick={props.onClick}>

    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span >You Cart</span>
    <span className={classes.badge}>{numberOfItem}</span>

</button>}
export default HeaderCartButton;