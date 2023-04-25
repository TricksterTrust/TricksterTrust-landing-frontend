import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Stock from "./components/Stock/Stock";
import {useState} from "react";
import Consultant from "./components/Consultant/Consultant";
import {Route, Routes} from "react-router-dom";
import Cards from "./Pages/Cards";
import Deposits from "./Pages/Deposits";
import Debit from "./Pages/Debit";
import Credit from "./Pages/Credit";

const cards = [
  {
    mainColor: '9B95D7',
    title: 'Дебетовая карта',
    text: 'Дебетовая карта — лучший способ оплачивать покупки и получать кэшбэк. С дебетовыми картами TricksterTrust клиенты получают кэшбэк рублями или бонусами за каждую покупку',
    descrTitle: 'Дебетовая карта TricksterTrust ',
    descrText: 'Супер пупер дебетовая карта, от лисьего банка TricksterTrust. Получайте кэшбэк и процент на остаток, снимайте наличные бесплатно',
    advantages: [
      {
        title: 'До 30% кэшбэка',
        text: 'Рублями за покупки'
      },
      {
        title: 'До 5% кэшбэка',
        text: 'Доход на сумму остатка каждый месяц'
      },
      {
        title: '0 ₽',
        text: 'За обслуживание для новых клиентов'
      }
    ],
    imgUrl: '../img/assets/cards/debit.png',
    formImgUrl: '../img/assets/card-black.png'
  },
  {
    mainColor: 'AED795',
    title: 'Кредитная карта',
    text: 'Кредитные карты — это платежные карты, позволяющие оплачивать покупки за счет средств банка. Расплачивайтесь кредиткой и получайте кэшбэк бонусами за любые покупки',
    descrTitle: 'Кредитная карта TricksterTrust',
    descrText: 'Супер пупер кредитная карта, от лисьего банка TricksterTrust. Подходит для повседневных трат и покупок в рассрочку. Одобрим за 2 минуты, доставим бесплатно',
    advantages: [
      {
        title: 'До 700 000₽',
        text: 'Кредитный лимит'
      },
      {
        title: '0% рассрочка',
        text: 'До 12 месяцев'
      },
      {
        title: '590 ₽ в год',
        text: 'Стоимость обслуживания'
      }
    ],
    imgUrl: '../img/assets/cards/credit.png',
    formImgUrl: '../img/assets/card-white.png'
  }
]

function App() {
  const [stockOpened, setStockOpened] = useState(true)
  
  return (
    <div className="wrapper">
      {stockOpened && <Stock setStockOpened={setStockOpened}/>}
	    <Consultant/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carts" element={<Cards/>}/>
        <Route path="/deposits" element={<Deposits/>}/>
        <Route path="/debit" element={<Debit card={cards[0]}/>}/>
        <Route path="/credit" element={<Credit card={cards[1]}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
