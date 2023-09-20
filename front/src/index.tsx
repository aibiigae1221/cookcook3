import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import IndexPage from './pages/index/IndexPage';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);


const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />
  }
]);
  

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
