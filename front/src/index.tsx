import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
// import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import IndexPage from './pages/index/IndexPage';
import './index.css';
import ServerInfoProvider from './features/meta/ServerInfoProvider';
import { PersistGate } from 'redux-persist/integration/react';

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
      <PersistGate loading={<p>loading..</p>} persistor={persistor}>
        <ServerInfoProvider>
          {/* <App /> */}
          <RouterProvider router={router} />
        </ServerInfoProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
