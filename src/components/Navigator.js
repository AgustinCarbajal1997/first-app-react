import { Switch, Route } from "react-router";
import ItemListContainer from "./ListingProducts/ItemListContainer";
import ItemDetailContainer from "./Detail/ItemDetailContainer";
import CartContainer from "./Cart/CartContainer";
import PaymentInformationContainer from "./paymentInformation/PaymentInformationContainer";
import PaymentOrderContainer from "./paymentInformation/PaymentOrderContainer";
import SearcherContainer from "./Searcher/SearcherContainer";
const Navigator = () => {
    return (
        <main className="main">
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/category/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={CartContainer}/>
            <Route exact path="/payment-information" component={PaymentInformationContainer}/>
            <Route exact path="/payment-information/:id" component={PaymentOrderContainer}/>
            <SearcherContainer/>
          </Switch>
        </main>
    )
}

export default Navigator
