import {Link} from 'react-router-dom';
import "./home.css"

const Home = () =>{
return (
<div className="home-page">
    <h2> Welcome to the 📚Bookstore✏️📜</h2>
    <Link className="btn btn-primary" to="/catalog">see our catalog</Link></div>
)



}




export default Home;