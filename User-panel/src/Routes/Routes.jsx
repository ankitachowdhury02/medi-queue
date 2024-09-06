import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Components/Signup";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
        ]
    },
    {
        path:"/signup",
        element: <Signup/>
    }
])

export default router;