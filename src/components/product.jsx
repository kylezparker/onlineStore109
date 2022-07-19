import "./product.css";
import {useState, useContext} from 'react';
import QuantityPicker from "./quantityPicker.jsx";
import StoreContext from "./../context/storeContext";


const Product = (props) =>{
    let [quantity,setQuantity]=useState(1);
    let globalAddProd = useContext(StoreContext).addProduct;
        


    const quantityChange =(val) => {
            // console.log("quantityChange", val);
            setQuantity(val);
    };

    const getTotal = () => {
    let total=props.data.price*quantity;

    return total.toFixed(2);
    }

    const handleAdd = () => {
        //copy of props.data plus quantity
        let prod4Cart= {...props.data};
        prod4Cart.quantity= quantity;

        // let prod4Cart= {...props.data, quantity: quantity};

        // console.log("totalAdd");
        globalAddProd(prod4Cart);
        }



    console.log(props);
    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt ="book"/>
            <h2>{props.data.title}</h2>
            <label>${props.data.price.toFixed(2)}</label>
            <label>Total:${getTotal()}</label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button onClick={handleAdd} className="btn btn-primary"> Add</button>
            
            
        </div>
    );

}

export default Product;


//functions parenthesis means call it, on start. no parenthesis means dont dont call it right away

///creat a quantity state variable, when qty changes, set value to state value. on the total, multiply price *quantity (from the state variable)