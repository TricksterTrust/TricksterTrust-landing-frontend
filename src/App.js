import Header from "./components/Header/Header";
import {Logo} from "./assets/Logo";
import {ArrowDown} from "./assets/ArrowDown";
import {ArrowsHorison} from "./assets/ArrowsHorison";

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
                <img src="../img/assets/card-black.png" alt="card black"/>
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
                  <img src="../img/assets/carts.png" alt="cards"/>
                </div>
              </div>
              <div className="banner">
                <div className="info">
                  <div className="tag">Калькулятор</div>
                  <h4>Купите или продайте валюту</h4>
                  <p>Узнайте сегодняшние курсы валют и&nbsp;посчитайте сумму обмена</p>
                </div>
                <div className="image">
                  <img src="../img/assets/calculator.png" alt="calculator"/>
                </div>
              </div>
              <div className="banner">
                <div className="info">
                  <div className="tag">Отзывы</div>
                  <h4>TrickserTrust вопросы и&nbsp;отзывы</h4>
                  <p>Выбирайте продукты TricksterTrust на&nbsp;основе реальных отзывов</p>
                </div>
                <div className="image">
                  <img src="../img/assets/reviews.png" alt="reviews"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <div className="searchContainer">
            <h3>Поиск по сайту</h3>
            <div className="info">
              <input placeholder="Что вы ищите?" type="text"/>
              <div className="btn">Найти</div>
            </div>
          </div>
        </div>
        <div className="bankYear">
          <div className="container">
            <div className="content">
              <div className="info">
                <h3>TricksterTrust обладатель пяти наград премии &laquo;Банк года&raquo;</h3>
                <p>
                  TricksterTrust был признан лучшим банком во&nbsp;многих категориях: &laquo;Недоговорение года&raquo;, &laquo;Инвестиоцинная компания года&raquo; и&nbsp;тд.. Это всё подтверждает успех нашего успешного банка
                </p>
                <div className="btn">Подробнее</div>
              </div>
              <div className="image">
                <img src="../img/assets/bank-year.png" alt="Bank year"/>
              </div>
            </div>
          </div>
        </div>
        <div className="converter">
          <div className="content">
            <h3>Конвертер валют</h3>
            <p>Конвертер по курсу ЦБ на сегодня</p>
            <div className="body">
              <div className="item">
                <div className="dropdown">
                  <div className="dropdownSelected">
                    <span>RUB</span>
                    <div className="arrow">
                      <ArrowDown/>
                    </div>
                    <ul style={{display:"none"}} className="dropdownList">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="itemBody">
                  <div className="amount">5 000 000 000</div>
                  <div className="amountTransfer">1 RUB = 0.0129 USD</div>
                </div>
              </div>
              <div className="arrowsHorison">
                <ArrowsHorison/>
              </div>
              <div className="item">
                <div className="dropdown">
                  <div className="dropdownSelected">
                    <span>USD</span>
                    <div className="arrow">
                      <ArrowDown/>
                    </div>
                    <ul style={{display:"none"}} className="dropdownList">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="itemBody">
                  <div className="amount">64663561.9535</div>
                  <div className="amountTransfer">1 USD = 77.3233 RUB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="top">
          <div className="container">
            <div className="topContent">
              <div className="topLogo">
                <Logo/>
                <h4>TricksterTrust</h4>
              </div>
              <div className="topContacts">
                <a href="tel:+78005778893">8&nbsp;800 577-88-93</a>
                <span>Для звонков по россии</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="menu">
          <div className="container">
            <div className="menuContent">
              <ul className="list">
                <li><a href="" className="link">Кредитные карты</a></li>
                <li><a href="" className="link">Потребительские кредиты</a></li>
                <li><a href="" className="link">Вклады</a></li>
              </ul>
              <ul className="list">
                <li><a href="" className="link">Дебетовые карты</a></li>
                <li><a href="" className="link">Ипотека для IT-специалистов</a></li>
                <li><a href="" className="link">Карта UnionPay</a></li>
              </ul>
              <ul className="list">
                <li><a href="" className="link">Кредит наличными</a></li>
                <li><a href="" className="link">Ипотека</a></li>
                <li><a href="" className="link">Про финансы</a></li>
              </ul>
              <ul className="list">
                <li><a href="" className="link">Премиум</a></li>
                <li><a href="" className="link">Ипотечный калькулятор</a></li>
                <li><a href="" className="link">Кредитный калькулятор</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bottom">
          <div className="container">
            <div className="bottomContent">
              <p>
                2001-2023. АО&nbsp;&laquo;TricksterTrust&raquo;, официальный сайт. Генеральная лицензия Банка России &#8470;&nbsp;1326 от&nbsp;16&nbsp;января 2015&nbsp;г. АО&nbsp;&laquo;TricksterTrust&raquo; является участником системы обязательного страхования вкладов. Информация о&nbsp;процентных ставках по&nbsp;договорам банковского вклада с&nbsp;физическими лицами. Центр раскрытия корпоративной информации. Информация профессионального участника рынка ценных бумаг. Информация о&nbsp;лицах, под контролем либо значительным влиянием которых находится Банк. Ул. Каланчевская, 27, Москва, 107078.
              </p>
              <p>
                АО&nbsp;&laquo;TricksterTrust&raquo; является оператором по&nbsp;обработке персональных данных, информация об&nbsp;обработке персональных данных и&nbsp;сведения о&nbsp;реализуемых требованиях к&nbsp;защите персональных данных отражены в&nbsp;Политике в&nbsp;отношении обработки персональных данных.
              </p>
              <p>
                АО&nbsp;&laquo;TricksterTrust&raquo; использует файлы &laquo;cookie&raquo; с&nbsp;целью персонализации сервисов и&nbsp;повышения удобства пользования веб-сайтом. Если вы&nbsp;не&nbsp;хотите, чтобы ваши пользовательские данные обрабатывались, пожалуйста, ограничьте их&nbsp;использование в&nbsp;своём браузере.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
