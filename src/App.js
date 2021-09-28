import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MENU_LIST from "./constants/MenuList";
import CustomProvider from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import SearcherContainer from "./components/SearcherContainer";
import PaymentInformationContainer from "./components/paymentInformation/PaymentInformationContainer"
import PaymentOrderContainer from "./components/paymentInformation/PaymentOrderContainer";


function App() {
  

  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar menuList={MENU_LIST}/>
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route path="/category/:id" component={ItemListContainer}/>
          <Route path="/item/:id" component={ItemDetailContainer}/>
          <Route exact path="/cart" component={CartContainer}/>
          <Route exact path="/payment-information" component={PaymentInformationContainer}/>
          <Route exact path="/payment-information/:id" component={PaymentOrderContainer}/>
          <SearcherContainer/>
          

        </Switch>
      </CustomProvider>

    </BrowserRouter>
  );
}

export default App;
