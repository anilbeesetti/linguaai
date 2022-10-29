import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Loginpage from "./pages/Loginpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
