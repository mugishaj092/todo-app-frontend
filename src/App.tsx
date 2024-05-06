import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import SideBar from "./Component/SideBar";
import LoginSignup from "./Component/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginSignup />} />
        <Route element={<SideBar />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
