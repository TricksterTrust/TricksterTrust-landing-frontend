import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import {Cross} from "./assets/Cross";

function App() {
  return (
    <div className="wrapper">
      <div className="stock">
        <div className="container">
          <div className="content">
            <h4>Успейте на открытие и получите год бесплатного обслуживания!</h4>
            <div className="timer">
              <span>Осталось</span>
              <div className="body">
                <div className="cells">
                  <div className="cell">0</div>
                  <div className="cell">5</div>
                  <div className="cell">7</div>
                </div>
                <span>Дней</span>
                <div className="cells">
                  <div className="cell">1</div>
                  <div className="cell">2</div>
                </div>
                <span className="colon">:</span>
                <div className="cells">
                  <div className="cell">4</div>
                  <div className="cell">9</div>
                </div>
                <span className="colon">:</span>
                <div className="cells">
                  <div className="cell">3</div>
                  <div className="cell">2</div>
                </div>
              </div>
            </div>
            <div className="btnStock">Оформить карту</div>
            <div className="close">
              <Cross/>
            </div>
          </div>
        </div>
      </div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
