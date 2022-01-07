import "./App.css";
import Header from "./components/Header";
import Productlist from "./components/Productlist/Productlist";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basketlist from "./components/Basketlist/Basketlist";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Categorylist from "./components/categorylist/Categorylist";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Productlist} />
          <Route path="/category/:name" component={Categorylist} />
          <Route path="/Basketlist" component={Basketlist} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
