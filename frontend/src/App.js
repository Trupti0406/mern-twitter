import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
