
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react';
const MealItemForm=(props)=>{
  const inputRef=useRef();

const [isInputValid,setIsInputValid]=useState(true);
  const onSubmitHandler=(event)=>{

    event.preventDefault();
    const amountText=inputRef.current.value;
    const amount=+amountText;
    if(amountText.trim().length===0||amount<1 || amount>5){
      setIsInputValid(false);
      return;
    }
    props.onAmountSubmit(amount);
  }
    return (
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
        ref={inputRef}
          label="Amount"
          input={{
            id: "amount_"+props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!isInputValid&&<p> Enter a Valid Amount (1-5)</p>}
      </form>
    );
}


export default MealItemForm;