import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Services from "./Components/Services";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Awards from "./Components/Awards";

const AppLayout = () => {
  return (
    <MantineProvider>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </MantineProvider>
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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/awards-and-achivements",
        element: <Awards />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
