import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Dashboard from "./components/dahsboard/Dashboard";
import Login from "./components/login/Login";
import Protected from "./components/routes/protected/Protected";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard onLogout={handleLogout} />
        </Protected>
    },
    {
      path: "/login",
      element: <Login onLogin={handleLogin} />,
    }
  ]);


  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
