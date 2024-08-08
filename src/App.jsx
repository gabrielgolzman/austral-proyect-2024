import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/dahsboard/Dashboard";
import Login from "./components/login/Login";
import Protected from "./components/routes/protected/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/routes/notFound/NotFound";
import { AuthenticationContextProvider } from "./services/authenticationContext/authentication.context";
import { ThemeContextProvider } from "./services/theme.context.jsx/theme.context";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protected />,
      children: [{
        path: "/book/:id",
        element: <BookDetails />,
      }, {
        path: "/",
        element: <Dashboard />
      }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);


  return (
    <div className="d-flex flex-column align-items-center">
      <AuthenticationContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthenticationContextProvider>

    </div>
  );
};

export default App;
