import "./product.css";
import QuantityPicker from "./quantityPicker.jsx";

const Product = () =>{
    return(
        <div className="product">
            <img src="https://i.ebayimg.com/images/g/gQwAAOSwALtaWkUy/s-l500.jpg" alt ="book"/>
            <h2>Title</h2>
            <label>Price:300$</label>
            <label>Total:400$</label>
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-primary"> Add</button>
            
            
        </div>
    );

}

export default Product;