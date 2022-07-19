import './cart.css'
import {useContext} from 'react';
import StoreContext from '../context/storeContext';
import ProductInCart from './productCart.jsx'
// import "./home.css"


const Cart = () =>{
    const cart= useContext(StoreContext).cart;

    const getCount = () => {
      let count = 0;
      for (let i = 0; i<cart.length;i++){
        
        count += cart[i].quantity;
      }
      return count;
    }

    const getTotal = () => {
        let total=0;
        for(let i=0;i<cart.length;i++){
            let prod= cart[i];
            total+=prod.price*prod.quantity;
        }

        return total.toFixed(2);
        }












return (
<div className="cart-page">
    <h2> This is the cart</h2>
    <h5> there are {getCount()} items in youre cart</h5>
    {/* <Link className="btn btn-primary" to="/catalog">Check our amazing Catalog</Link> */}


    <div className="parent">
        <section  className="list">
        {cart.map((prod, index) => <ProductInCart key ={prod.id} data = {prod}> </ProductInCart> )}
        </section>

        <section className="info">
            <h5>Total to Pay</h5>
            <h3>${getTotal()}</h3>
        </section>
    </div>


    {/* <ul>
        {cart.map((prod, index) => <ProductInCart key ={prod.id} data = {prod}> </ProductInCart> )}
    </ul> */}

    </div>
)



};




export default Cart;