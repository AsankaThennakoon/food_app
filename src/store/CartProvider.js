import CartContex from "./cart-context";
import { useReducer } from "react";


const initilaCartState={
    items:[],
    totalAmount:0

}
const CartReducer=(state,action)=>{
    if(action.type==="ADD"){
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
        
        const existItemIndex=state.items.findIndex((item)=>{return item.id===action.item.id;});
        const existItem=state.items[existItemIndex];
        let updatedItems;
        if(existItem){
            const updatedItem={
                ...existItem,
                amount:existItem.amount+action.item.amount
            };
            updatedItems=[...state.items];
           updatedItems[existItemIndex]=updatedItem;

            
        }else{
             updatedItems=state.items.concat(action.item);

        }

        return {items: updatedItems,totalAmount: updatedTotalAmount};
    }

    if(action.type==="REMOVE"){
        
        const existItemIndex=state.items.findIndex((item)=>{return item.id===action.id;});
        const existItem=state.items[existItemIndex];
        const updatedTotalAmount=state.totalAmount-existItem.price;


        let updatedItems;
        if(existItem.amount===1){
             updatedItems=state.items.filter(item=>{return item.id !== action.id})
            
        }else{
            const updatedItem={
                ...existItem,
                amount:existItem.amount-1
            };
            updatedItems=[...state.items];
           updatedItems[existItemIndex]=updatedItem;


        }

        return {items: updatedItems,totalAmount: updatedTotalAmount};
    }


    return initilaCartState;

}



const CartProvider=(props)=>{

    const [cartState,dispatchCartAction]=useReducer(CartReducer,initilaCartState);
    const addItem=(item)=>{
   dispatchCartAction({type:'ADD',item:item})

    }
    const removeItem=(id)=>{

        dispatchCartAction({type:'REMOVE',id:id})
    }

    const cartContext={
        
            items:cartState.items,
            totalAmount:cartState.totalAmount,
            addItem:addItem,
            removeItem:removeItem
        
    };
    return (
        <CartContex.Provider value={cartContext}>
            {props.children}
        </CartContex.Provider>
    );

}

export default CartProvider;