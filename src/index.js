import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Homepage from "./Components/Homepage/Homepage";
import Rooms from "./Components/Rooms/Rooms";
import Images from "./Components/Hotel-Images/Images";
import Standard from "./Components/Rooms-Category/Standard/Standard";
import Super from "./Components/Rooms-Category/Super/Super";
import Executive from "./Components/Rooms-Category/Executive/Executive";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="standard" element={<Standard />} />
      <Route path="super" element={<Super />} />
      <Route path="executive" element={<Executive />} />
      <Route path="rooms-images" element={<Images />} />
      <Route path="*" element={<Homepage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
