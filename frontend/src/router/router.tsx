import React from "react";
import Dashboard from "../pages/Dashboard";
import LeadDetails from "../pages/LeadDetails";
import { useRoutes } from "react-router-dom";
import { TopBar } from "../components/TopBar";
import { NewCustomer } from "../pages/NewCustomer";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <TopBar />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "lead-details",
          element: <LeadDetails />,
        },
        {
          path: "existing-customer",
          element: <NewCustomer />,
        },
      ],
    }
  ];
  return useRoutes(routes);
};

export default Router;
