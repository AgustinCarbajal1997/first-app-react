import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import MENU_LIST from "./constants/MenuList";


function App() {
  

  return (
    <div>
      <NavBar menuList={MENU_LIST}/> 
      <ItemListContainer/>
    </div>
  );
}

export default App;
