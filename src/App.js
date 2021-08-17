import NavBar from "./components/NavBar";
import MENU_LIST from "./constants/MenuList";


function App() {
  return (
    <div>
      <NavBar menuList={MENU_LIST}/> 
    </div>
  );
}

export default App;
