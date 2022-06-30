import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";

function App() {
  return (
    //can use <React.Fragment> or <> instead of parent div to use mult divs
    <div className="App">
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <h1 className="welcome"> Welcome to The Bookstore</h1>
      <Catalog></Catalog>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
