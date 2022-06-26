
import {useEffect, useState} from 'react';
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService"

const Catalog = () =>{
    let [products,setProducts]=useState([]);

    const loadCatalog = () =>{
        let service= new DataService();
        let data=service.getCatalog();
       setProducts(data); 
    }
    // loadCatalog();
    // console.log(products);
    useEffect(() =>{
        loadCatalog();
    },[]);

    return(
        <div className="catalog container">
        <div className="catalog">
            <h2>This is our Amazing Catalog!!</h2>
            <h3>we have {products.length} products</h3>
            <div className="products-container">
            {
                products.map((prod)=>
                    (<Product key={prod.id} data={prod}></Product>))
            }
            {/* <Product title="Test A" price="300"></Product>
            <Product title="Test B" price="300"></Product>
            <Product title="Test C" price="300"></Product>
            <Product title="Test D" price="300"></Product>
            <Product title="Test E" price="300"></Product>
            <Product title="Test F" price="300"></Product>
            <Product title="Test G" price="300"></Product> */}
        </div>
        </div>
        </div>
    );

}

export default Catalog;