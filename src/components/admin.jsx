import './admin.css'
import {useState} from 'react'



const Admin = () =>{
    const [coupon, setCoupon] = useState({});
    const [product, setProduct] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const handleProductChange = (e) => {
        let name= e.target.name;
        let value= e.target.value;
       


        let copy={...product}; //create a cpoy
        copy[name]=value;
        setProduct(copy);
      

    
        // console.log(name,value);
        // setCoupon(e.target.value);
    };
    const saveProduct = () => {
        let copy={...coupon}; //create a cpoy
        copy["price"]=parseFloat(copy["price"]);
        console.log(copy)
        // console.log(product);

        //todo:save prod on server
        //save prod on state array
//change name of copy
        let copyAllProds= [...allProducts];
        copyAllProds.push(copy);
        setAllProducts(copyAllProds);


    };
    const handleCouponChange = (e) => {
        let name= e.target.name;
        let value= e.target.value;

        let copy={...coupon}; //create a cpoy

        coupon[name]=value; //mod
        setCoupon(coupon); //send back

    
        // console.log(name,value);
        // setCoupon(e.target.value);
    };
    const saveCoupon = () => {
        let copy={...coupon}; //create a cpoy
        copy["discount"]=parseFloat(copy["discount"]);
        // copy["price"]=parseFloat(copy["price"]);
        console.log(copy)
        // console.log(coupon);
        //todo:send obj to server

        //add it to the state array
        let copyCoupons= [...allCoupons];
        copyCoupons.push(copy);
        setAllCoupons(copyCoupons)

        // setCoupon(copy);

    };

return (
<div className="admin-page">
    <h1> Store administration</h1>
    <div className="parent">
    <section className="products">
    <h3>Products</h3>
        <div className="form">
                <div className="my-control">
                    <label>Title</label>
                    <input name="title" onChange={handleProductChange} type="text" />
                </div>
                <div className="my-control">
                    <label>Price</label>
                    <input  name="price"  onChange={handleProductChange} type="number" />
                </div>
                <div className="my-control">
                    <label>Image</label>
                    <input name="picture" placeholder="image name" onChange={handleProductChange} type="text" />
                </div>
                <div className="my-control">
                    <label>Category</label>
                    <input name="category" onChange={handleProductChange} type="text" />
                </div>

                <div className="products-list">
                    <ul>
                        {allProducts.map((prod, index) => <li key={index}>{prod.title} - ${prod.price}</li>)}
                    </ul>
                </div>



                <div className="my-control">
                    <button onClick={saveProduct} className="btn btn-primary"> Save </button>
                    </div>
                    </div>
                    </section>
    




    <section className="coupons">
        <h3>Coupon codes</h3>
        <div className="form">
                <div className="my-control">
                    <label>Coupon</label>
                    <input name="code" onChange={handleCouponChange} type="text" />
                </div>
                
                <div className="my-control">
                    <label>Discount</label>
                    <input  name="discount"  onChange={handleCouponChange} type="number" />
                </div>

                <div className="my-control">
                    <button onClick={saveCoupon} className="btn btn-primary"> Save </button>
                    </div>
                    </div>

                    <div className="coupons-list">
                        <ul>
                        {allCoupons.map((coupon, index) => <li key={index}>{coupon.code} - {coupon.discount}% off</li>)}
                        </ul>
                        {/* display stored coupons */}
                    </div>

                    </section>
                    </div>
                    </div>

);
};

export default Admin;