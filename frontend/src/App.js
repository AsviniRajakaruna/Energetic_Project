import "./assets/css/App.css";
import "./assets/css/icons.css";
import "./assets/css/main.css";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import AddSales from "./components/Sales/AddSales";
import AllSales from "./components/Sales/AllSales";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AdminDashboard from "./components/Admin/EC_Monitoring/AdminDashboard";
import AdminHeader from "./components/header";
import AdminFooter from "./components/Admin/Common/AdminFooter";
import ResponsiveAppBar from "./components/NavBar/ResponsiveAppBar";
import Sales from "./components/Sales/Sales";
import Order from "./components/Sales/Order";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Sales/>
              </Route>
              <Route path="/order">
                  <Order/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
