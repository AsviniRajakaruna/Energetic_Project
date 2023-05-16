import "./assets/css/App.css";
import "./assets/css/icons.css";
import "./assets/css/main.css";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import AddSales from "./components/Sales/AddSales";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Admin/EC_Monitoring/AdminDashboard";
import AdminHeader from "./components/header";
import AdminFooter from "./components/Admin/Common/AdminFooter";

function App() {
  return (
    <div>
      <AdminHeader />
      <AddSales />
      <AdminFooter/>
    </div>
  );
}

export default App;
