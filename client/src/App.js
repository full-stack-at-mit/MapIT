import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  // check if user is authenticated. if so, render outlet (content for the page)
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;