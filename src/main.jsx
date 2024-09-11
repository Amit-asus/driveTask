import React from "react";
import Drives from "./Features/drives/index.jsx";
import { store } from "./Redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Products from "./Features/products/index.jsx";
import Users from "./Features/createUser/index.jsx";
import JObs from "./Features/jobs/index.jsx";
import Filter from "./Features/Filter/Filter.jsx";
import Search from "./Features/Search/Search.jsx";
import UserLogin from "./Components/UserLogin.jsx";
import AdminLogin from "./Components/AdminLogin.jsx";
import UserDashboard from "./Components/UserDashboard.jsx";
import AdminDashboard from "./Components/AdminDashboard";
import CompanyList from "./Components/CompanyList";
import CreateCompany from "./Components/createCompany.jsx";
import CreateJobs from "./Components/CreateJobs.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Drives />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/jobs",
    element: <JObs />,
  },

  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  { path: "/user-login", element: <UserLogin /> },

  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/user-dashboard", element: <UserDashboard /> },

  { path: "/admin-dashboard", element: <AdminDashboard /> },
  { path: "/company-list", element: <CompanyList /> },
  {
    path: "/create-company",
    element: <CreateCompany />,
  },
  {
    path: "/create-job",
    element: <CreateJobs />,
  },

  {
    path: "/show-job",
    element: <CreateJobs />,
  },

  // {
  //   path: "/admin-dashboard",
  //   element: <AdminDashboard />,
  //   children: [
  //     {
  //       path: "company-list",
  //       element: <CompanyList />,
  //     },
  //     {
  //       path: "create",
  //       element: <CreateCompany />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// {
/* 



const router = createBrowserRouter([
  {
    path: "/jobs",
    element: <JobsComponent />,
  },
  {
    path: "/ProductList",
    element: <ProductList />,
  },
  {
    path: "/PaginationComponent",
    element: <PaginationComponent />,
  },
  {
    path: "/products",
    element: <ProductsApi />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/employees",
    element: <EmployeesPage />,
  },
  {
    path: "/posts",
    element: <PostComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

  */
// }
