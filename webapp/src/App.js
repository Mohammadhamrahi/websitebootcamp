import "./App.css";
import Header from "./components/Header";
import Productlist from "./components/Productlist/Productlist";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basketlist from "./components/Basketlist/Basketlist";

function App() {
  return (  
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Productlist} />
          <Route path="/Basketlist" component={Basketlist} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
