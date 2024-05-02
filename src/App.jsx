
import { Suspense, lazy, useEffect } from "react";



import { Route, Routes } from 'react-router-dom';
import {selectIsRefreshing} from './redux/auth/selectors';

import Layout from './components/Layout/Layout';

import RegistrationPage  from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage'

import Loader from "./components/Loader/Loader";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

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
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing? (<Loader />):(

      
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
        <Route path ="*" element ={<NotFound />} />

      </Routes>
        
      </Suspense>
    </Layout>
  
  );
}

export default App;







