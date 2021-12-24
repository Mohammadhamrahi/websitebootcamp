import "./App.css";
import Header from "./components/Header";
import Productlist from "./components/Productlist/Productlist";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModalBasketlist from "./components/ModalBasketlist/ModalBasketlist";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Productlist} />
          <Route path="/ModalBasketlist" component={ModalBasketlist} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
