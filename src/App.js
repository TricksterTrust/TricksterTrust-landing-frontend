import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Stock from "./components/Stock/Stock";
import {useState} from "react";

function App() {
  const [stockOpened, setStockOpened] = useState(true)
  
  
  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let year = today.getFullYear();

  // today = day + '/' + month + '/' + year;
  // console.log(today.getFullYear())
  return (
    <div className="wrapper">
      {stockOpened && <Stock setStockOpened={setStockOpened}/>}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
