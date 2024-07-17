import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";

import StudyMaterial from "./views/StudyMaterial";
import LoginPage from "./views/LoginPage.jsx"
import RegisterPag from "./views/RegisterPag.jsx";
import Vacancies from "./views/Vacancies";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./views/Home";
import LiveSessions from "./views/LiveSessions";
import Educator from "./views/Educator";
import Mylearning from "./views/Mylearning";
import Courses from "./views/Courses";
import ContactUs from "./views/ContactUs.jsx";
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/studyMaterial',
          element: <StudyMaterial/>
        },
        {
          path: '/liveSessions',
          element: <LiveSessions/>
        },
        {
          path: '/educators',
          element: <Educator/>
        },
        {
          path: '/Vacancies',
          element: <Vacancies/>
        },
        {
          path: '/mylearning',
          element: <Mylearning/>
        },
        {
          path:'/courses',
          element:<Courses/>
        }
        ,{
          path:"/contact",
          element:<ContactUs/>
        }

        
      ]
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/SignUp',
          element: <RegisterPag />
        },
        {
          path: '/Home',
          element: <Home />
        },
        {
          path: '/studyMaterial',
          element: <StudyMaterial/>
        },
        {
          path: '/liveSessions',
          element: <LiveSessions/>
        },
        {
          path: '/educators',
          element: <Educator/>
        },
        {
          path: '/Vacancies',
          element: <Vacancies/>
        },
    
          {
            path:"/contact",
            element:<ContactUs/>
          }
   
       


      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
)

export default router;