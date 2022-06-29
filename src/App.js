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
      <About></About>
      <h1 className="welcome"> welcome to online store</h1>
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
