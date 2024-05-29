import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./components/dahsboard/Dashboard";
import Login from "./components/login/Login";
import Protected from "./components/routes/protected/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/routes/notFound/NotFound";

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
      element: <Protected isSignedIn={isLoggedIn} />,
      children: [{
        path: "/book/:id",
        element: <BookDetails />,
      }, {
        path: "/",
        element: <Dashboard onLogout={handleLogout} />
      }
      ]
    },
    {
      path: "/login",
      element: <Login onLogin={handleLogin} />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);


  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
