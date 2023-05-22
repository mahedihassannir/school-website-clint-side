import {
    createBrowserRouter

} from "react-router-dom";

// here is teh all import of the routes 

import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Courses from "../Pages/Courses";
import Library from "../Pages/Library";
import OurTeachers from "../Pages/OurTeachers";
import StudentFromForALLClass from "../Pages/StudentFromForALLClass";
import Login from "../Logins/Login";
import Register from "../Logins/Register";
import DashBord from "../DashBord/DashBord";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "About",
                element: <About></About>
            },
            {
                path: "Contact",
                element: <Contact></Contact>
            },
            {
                path: "Courses",
                element: <Courses></Courses>
            },
            {
                path: "Library",
                element: <Library></Library>
            },
            {
                path: "OurTeachers",
                element: <OurTeachers></OurTeachers>
            },
            {
                path: "StudentFrom",
                element: <StudentFromForALLClass></StudentFromForALLClass>
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Register",
                element: <Register></Register>
            },
            {
                path: "DashBoard",
                element: <DashBord></DashBord>
            },

        ]
    }
])

export default router