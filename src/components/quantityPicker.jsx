import {useState} from 'react';
import "./quantityPicker.css";
// import Product from "./product";

const QuantityPicker = (props) =>{
    let [quantity,setQuantity]=useState(0);
    
    const handleIncrease=()=>{
        let newVal=quantity+1;
        setQuantity(newVal);
        props.onChange(newVal);  //call the function on the parent
    }

    const handleDecrease=()=>{
        if(quantity>1){
            let val=quantity-1;
        setQuantity(val);
        props.onChange(val);  //call the function on the parent
        }
    }


    return(
        <div className="quantityPicker">
            <button className="btn btn-primary btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-primary btn-sm" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;