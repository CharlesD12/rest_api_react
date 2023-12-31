import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardWithNavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

// Komponen ini bertindak sebagai pengatur untuk rute /dashboard
function DashboardWithNavbar() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
