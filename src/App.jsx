
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from 'react-redux';``

import { Route, Routes } from 'react-router-dom';


import { fetchContacts } from './redux/contacts/operations';
import Layout from './components/Layout/Layout';

import RegistrationPage  from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage'

import Loader from "./components/Loader/Loader";
import './App.css';

const HomePage = lazy(() => import("./pages/HomePage"));
const RestrictedRoute = lazy(() =>
  import("./components/RestrictedRoute/RestrictedRoute")
);
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   <>
      
    <Layout>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path ="/" element ={<HomePage />} />
        <Route 
        path ="/register" 
        element ={
        <RestrictedRoute ><RegistrationPage /></RestrictedRoute>} />
        <Route path ="/login" element ={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
        <Route path ="/contacts" element ={ <PrivateRoute><ContactsPage /></PrivateRoute>} />
        {/* <Route path ="*" element ={<NotFound />} /> */}

      </Routes>
      </Suspense>
    </Layout>
    </>
  );
}

export default App;







