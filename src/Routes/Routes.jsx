import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequest from "../pages/BidRequest/BidRequest";
import PrivetRoute from "./PrivetRoute";
import UpdateJob from "../pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addJob",
        element: (
          <PrivetRoute>
            <AddJob />
          </PrivetRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivetRoute>
            <MyPostedJob />
          </PrivetRoute>
        ),
      },
      {
        path: "/myBids",
        element: (
          <PrivetRoute>
            <MyBids />
          </PrivetRoute>
        ),
      },
      {
        path: "/bidRequest",
        element: (
          <PrivetRoute>
            <BidRequest />
          </PrivetRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivetRoute>
            <JobDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivetRoute>
            <UpdateJob />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
