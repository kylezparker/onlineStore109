
import {useEffect, useState} from 'react';
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService"

const Catalog = () =>{
    //state variable, when variable changes, screen updates
    //products is an immutable 
    let [products,setProducts]=useState([]);

    const loadCatalog = () =>{
        //get products
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
            {/* <h2>This is our Amazing Catalog!!</h2> */}
            <br></br>
            <h3>current stock: {products.length} books</h3>
            <br></br>
            <div className="products-container">
            {
                //map function transforms things. prod into product tags
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

//useEffect, useState,
//map function, key word, data word line 33
//parent child components
//object fit css for images 
//js truthy values
//meaning of this 