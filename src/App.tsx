import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuthContext";
import AuthorizedPages from "./pages/AuthorizedPages";
import HomePage from "./pages/home/HomePage";
import LandingPage from "./pages/landing/LandingPage";
import Loginpage from "./pages/login/Loginpage";
import PublicPages from "./pages/PublicPages";
import TranslatePage from "./pages/translate/TranslatePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicPages />}>
              <Route path="" element={<LandingPage />} />
              <Route path="login" element={<Loginpage />} />
            </Route>
            <Route path="/home" element={<AuthorizedPages />}>
              <Route path="" element={<HomePage />} />
              <Route path="translate" element={<TranslatePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
