import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import SideBar from "./Component/SideBar";
import LoginSignup from "./Component/LoginSignup";

function App() {
  const isLogin=true
  return (
    <BrowserRouter>
      <Routes>
        <Route element={isLogin?<SideBar />:<LoginSignup />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
