import ItemsComponent from "./Components/ItemsComponent";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CartComponent from "./Components/CartComponent";

function App(){
  return(
    <Provider store = {store}>
      <div className="container">
        <ItemsComponent />
        <CartComponent />
      </div>
    </Provider>
  )
}

export default App