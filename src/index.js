import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root/Root.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About,Login,Contact, Error,BookNow } from './Pages';


const router= createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"about-us",
        element:<About/>,
      },
      {
        path:"Contact",
        element:<Contact/>,
      },
      {
        path:"BookNow",
        element:<BookNow/>
      },
      {
        path:"*",
        element:<Error/>,
      }
      
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

