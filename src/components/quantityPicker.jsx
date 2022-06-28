import {useState} from 'react';
import "./quantityPicker.css";
// import Product from "./product";

const QuantityPicker = () =>{
    let [quantity,setQuantity]=useState(0);
    
    const handleIncrease=()=>{
        setQuantity(quantity+1);
    }

    const handleDecrease=()=>{
        if(quantity>1){
        setQuantity(quantity-1);
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