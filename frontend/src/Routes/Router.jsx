import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/User-Pages/Home";
import Appointment from "../Pages/User-Pages/Appointment";
import ProfileUpdate from "../Pages/User-Pages/ProfileUpdate";
import HelpAndSupport from "../Pages/User-Pages/HelpAndSupport";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/appointment",
                element: <Appointment/>
            },
            {
                path: "/update-profile",
                element: <ProfileUpdate/>
            },
            {
                path: "/help-support",
                element: <HelpAndSupport/>
            }
        ]
    },
   
])

export default router;