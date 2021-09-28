import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MENU_LIST from "./constants/MenuList";
import CustomProvider from "./context/CartContext";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";


function App() {
  

  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar menuList={MENU_LIST}/>
        <Navigator/>
        <Footer/>
      </CustomProvider>

    </BrowserRouter>
  );
}

export default App;
