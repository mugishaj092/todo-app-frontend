import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import SideBar from "./Component/SideBar";
import LoginSignup from "./Component/LoginSignup";
import { useEffect, useState } from "react";

function App() {
  const [isLogin,setIslogin]=useState(false);

  useEffect(() => {
    const jwtToken = window.localStorage.getItem('jwt');
    if (jwtToken) {
      setIslogin(true);
    }
  }, []);
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
