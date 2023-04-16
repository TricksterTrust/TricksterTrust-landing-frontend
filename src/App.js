import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Stock from "./components/Stock/Stock";
import {useState} from "react";
import Consultant from "./components/Consultant/Consultant";

function App() {
  const [stockOpened, setStockOpened] = useState(true)
  
  return (
    <div className="wrapper">
      {stockOpened && <Stock setStockOpened={setStockOpened}/>}
	    <Consultant/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
