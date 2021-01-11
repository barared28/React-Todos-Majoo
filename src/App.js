import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import "./app.css";
// Redux
import { Provider } from "react-redux";
import store from "./Redux/strore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
