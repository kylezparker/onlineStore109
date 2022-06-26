import "./catalog.css";
import Product from "./product";

const Catalog = () =>{
    return(
        <div className="catalog">
            <h2>This is our Amazing Catalog!!</h2>
            <h3>we have served over 1 billion customers!</h3>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );

}

export default Catalog;