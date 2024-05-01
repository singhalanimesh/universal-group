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
import CurrentPortfolio from "./Components/CurrentPortfolio";
import CompletedPortfolio from "./Components/CompletedPortfolio";
import Awards from "./Components/Awards";
import UniversalTeam from "./Components/UniversalTeam";

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
        path: "/about-us",
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
        path: "/completed-projects",
        element: <CompletedPortfolio />,
      },
      {
        path: "/current-projects",
        element: <CurrentPortfolio />,
      },
      {
        path: "/awards-and-achievements",
        element: <Awards />,
      },
      {
        path: "/universal-team",
        element: <UniversalTeam />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
