import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Stock from "./components/Stock/Stock";
import {useState} from "react";
import Consultant from "./components/Consultant/Consultant";
import {Route, Routes} from "react-router-dom";
import Carts from "./Pages/Carts";
import Deposits from "./Pages/Deposits";
import Debit from "./Pages/Debit";
import Credit from "./Pages/Credit";

function App() {
  const [stockOpened, setStockOpened] = useState(true)
  
  return (
    <div className="wrapper">
      {stockOpened && <Stock setStockOpened={setStockOpened}/>}
	    <Consultant/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/deposits" element={<Deposits/>}/>
        <Route path="/debit" element={<Debit/>}/>
        <Route path="/credit" element={<Credit/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
