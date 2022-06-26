import "./product.css";
import QuantityPicker from "./quantityPicker.jsx";

const Product = (props) =>{
    console.log(props);
    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt ="book"/>
            <h2>{props.data.title}</h2>
            <label>${props.data.price}</label>
            <label>Total:400$</label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary"> Add</button>
            
            
        </div>
    );

}

export default Product;