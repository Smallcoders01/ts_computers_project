import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './Components/LoginForm/LoginForm';
import reportWebVitals from './reportWebVitals';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services';
import About from './Components/About';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"LoginForm",
    element:<LoginForm/>,
  },
  {
    path:"Contact",
    element:<Contact/>,
  },
  {
    path:"Services",
    element:<Services/>,
  },
  {
    path:"About",
    element:<About/>,
  },
])
ReactDOM.render(
 <RouterProvider router={router}/>,
  document.getElementById("root")
);


reportWebVitals();
