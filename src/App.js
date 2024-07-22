import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./auth/Registration";
import Homepage from "./pages/Homepage";
import Login from "./auth/Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userId/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
