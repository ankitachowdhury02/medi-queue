import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Components/Signup";
import Appointment from "../Pages/Appointment";
import ProfileUpdate from "../Pages/ProfileUpdate";
import HelpAndSupport from "../Pages/HelpAndSupport";


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
    {
        path:"/signup",
        element: <Signup/>
    }
])

export default router;