import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page">
        <div className="hero">
          <div className="container">
            <div className="content">
              <div className="info">
                <h1>Дебетовая карта, которую вы&nbsp;бы точно хотели получить</h1>
                <p>Кэшбэк&nbsp;5% каждый месяц, за&nbsp;переводы с&nbsp;карты на&nbsp;картуTricksterTrust до&nbsp;50&nbsp;тыс ₽&nbsp;в&nbsp;месяц</p>
                <div className="btn">Оформить карту</div>
              </div>
              <div className="image">
                <img src="../img/assets/card-black.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="content">
              <div className="banner">
                <div className="info">
                  <div className="tag">Карты</div>
                  <h4>Кредитная карта 180 дней без&nbsp;%</h4>
                  <p>Кешбэк 1&nbsp;000&nbsp;₽ и&nbsp;обслуживание 0&nbsp;₽</p>
                </div>
                <div className="image">
                  <img src="../img/assets/carts.png" alt=""/>
                </div>
              </div>
              <div className="banner">
                <div className="info">
                  <div className="tag">Калькулятор</div>
                  <h4>Купите или продайте валюту</h4>
                  <p>Узнайте сегодняшние курсы валют и&nbsp;посчитайте сумму обмена</p>
                </div>
                <div className="image">
                  <img src="../img/assets/calculator.png" alt=""/>
                </div>
              </div>
              <div className="banner">
                <div className="info">
                  <div className="tag">Отзывы</div>
                  <h4>TrickserTrust вопросы и&nbsp;отзывы</h4>
                  <p>Выбирайте продукты TricksterTrust на&nbsp;основе реальных отзывов</p>
                </div>
                <div className="image">
                  <img src="../img/assets/reviews.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        footer
      </footer>
    </div>
  );
}

export default App;
