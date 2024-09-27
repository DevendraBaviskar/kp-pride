import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";

import Contact from "./Components/Contact/Contact";
import Homepage from "./Components/Homepage/Homepage";
import Rooms from "./Components/Rooms/Rooms";
import Images from "./Components/Hotel-Images/Images";
import Standard from "./Components/Rooms-Category/Standard/Standard";
import Super from "./Components/Rooms-Category/Super/Super";
import Executive from "./Components/Rooms-Category/Executive/Executive";
import Restaurent from "./Components/Restaurent/Restaurent";
import Bar from "./Components/Bar/Bar";
import Transport from "./Components/Transport/Transport";
import Tourist from "./Components/Tourist/Tourist";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />

      <Route path="tourist-places" element={<Tourist />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="standard" element={<Standard />} />
      <Route path="super" element={<Super />} />
      <Route path="executive" element={<Executive />} />
      <Route path="rooms-images" element={<Images />} />
      <Route path="restaurent" element={<Restaurent />} />
      <Route path="nearby-transport" element={<Transport />} />
      <Route path="bar" element={<Bar />} />
      <Route path="*" element={<Homepage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      bodyClassName="toastBody"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
