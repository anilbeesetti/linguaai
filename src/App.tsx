import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuthContext";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Loginpage from "./pages/Loginpage";
import TranslatePage from "./pages/TranslatePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/translate" element={<TranslatePage />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
