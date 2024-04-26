import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },{
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
