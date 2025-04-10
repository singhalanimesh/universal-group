import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Services from "./Components/Services";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Awards from "./Components/Awards";
import UniversalTeam from "./Components/UniversalTeam";
import Footer from "./Components/Footer";
import CustomerAppreciation from "./Components/CustomerAppreciation";
import Error from "./Components/Error";

const CurrentPortfolio = lazy(() => import("./Components/CurrentPortfolio"));
const CompletedPortfolio = lazy(() =>
  import("./Components/CompletedPortfolio")
);

const AppLayout = () => {
  return (
    <MantineProvider>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </MantineProvider>
  );
};

const appRouter = createHashRouter([
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
        element: (
          <Suspense
            fallback={<div className="h-screen bg-[#e3f5f8]"></div>}
          >
            <CompletedPortfolio />,
          </Suspense>
        ),
      },
      {
        path: "/current-projects",

        element: (
          <Suspense
            fallback={<div className="h-screen bg-[#e3f5f8]"></div>}
          >
            <CurrentPortfolio />,
          </Suspense>
        ),
      },
      {
        path: "/awards-and-achievements",
        element: <Awards />,
      },
      {
        path: "/universal-team",
        element: <UniversalTeam />,
      },
      {
        path: "/customer-appreciation",
        element: <CustomerAppreciation />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
