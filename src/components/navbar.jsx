import {Link} from 'react-router-dom';
import "./navbar.css";
import {useContext} from 'react';
import StoreContext from './../context/storeContext';


function Navbar(){
  let cart= useContext(StoreContext).cart;

    return (
//     <div className="navbar">
        
//         <nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">📚Bookstore✏️📜</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//         <a className="nav-link" href="#">Features</a>
//         <a className="nav-link" href="#">Pricing</a>
//         <a className="nav-link disabled">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>
// </div>);
<nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            📚Bookstore✏️📜
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            </ul>
            {/* rework view cart  button */}
            <li className="nav-item">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit"> */}
              <Link className="nav-link form-control me-2" to="/cart"><span className="badge bg-primary">{cart.length}</span>View Cart</Link>
              {/* </button> */}
            </li>
          </div>
        </div>
      </nav>


    )
}
export default Navbar;