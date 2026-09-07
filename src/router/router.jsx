import { createBrowserRouter } from "react-router";
import Layout from '../components/Layout';
import Homepage from '../views/Homepage';
import Register from '../views/Register';
import Info from '../views/Info';
import { getAnimes } from './loader';
import { getSingleAnime } from './loader';
import Details from '../views/Details';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { 
        index : true,
        Component : Homepage       
      },
      {
        path : 'register',
        Component : Register
      },
      {
        path : 'info',
        Component : Info,
        loader : getAnimes
      },
      {
        path : 'info/details/:id',
        Component : Details ,
        loader : getSingleAnime
      }
    ],
  },
]);

export default router
