import {Link} from 'react-router-dom';
// import "./home.css"

const Home = () =>{
return (
<div className="home-page">
    <h2> Welcome to the online Bookstore</h2>
    <Link className="btn btn-primary" to="/catalog">Check our amazing Catalog</Link></div>
)



}




export default Home;