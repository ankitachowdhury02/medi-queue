import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/User-Pages/Home";
import Appointment from "../Pages/User-Pages/Appointment";
import ProfileUpdate from "../Pages/User-Pages/ProfileUpdate";
import HelpAndSupport from "../Pages/User-Pages/HelpAndSupport";
import Hospital from "../Layout/Hospital";
import HospitalHome from "../Pages/Hospital-pages/HospitalHome";
import AppointmentDetails from "../Pages/Hospital-pages/AppointmentDetails";
import Portfolio from "../Pages/Portfolio/Portfolio";
import UserLogIn from "../Components/User-Components/UserLogIn";
import HospitalLogin from "../Components/Hospital-Components/HospitalLogin";


const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Portfolio/>,
    },
    {
        path: "/user-login",
        element: <UserLogIn/>
    },
    {
        path:"/user",
        element:<Main/>,
        children: [
            {
                path:"/user",
                element:<Home/>
            },
            {
                path: "/user/appointment",
                element: <Appointment/>
            },
            {
                path: "/user/update-profile",
                element: <ProfileUpdate/>
            },
            {
                path: "/user/help-support",
                element: <HelpAndSupport/>
            }
        ]
    },
    {
        path: "/hospital-login",
        element: <HospitalLogin/>
    },
    {
        path: "/hospital",
        element:<Hospital/>,
        children: [
            {
                path: "/hospital",
                element: <HospitalHome/>
            },
            {
                path: "/hospital/appointments",
                element: <AppointmentDetails/>
            },
            {
                path: "/hospital/bedbooking"
            }
        ]
    }
   
])

export default router;