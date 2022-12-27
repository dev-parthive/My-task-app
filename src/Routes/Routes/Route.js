import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask";
import CompletedTask from "../../Pages/CompletedTask";
import Login from "../../Pages/Login";
import MyTask from "../../Pages/MyTask";
import Signup from "../../Pages/Signup";


const router = createBrowserRouter(
    [
        {
            path: "/", 
            element: <Main></Main>,
            children:[
                {
                    path: "/",
                    element:<AddTask></AddTask>
                },
                {
                    path: "/addtask", 
                    element: <AddTask></AddTask>
                }, 
                {
                    path: "/mytask",
                    element: <MyTask></MyTask>
                }, 
                {
                    path: "/completedtask",
                    element: <CompletedTask></CompletedTask>
                }, 
                {
                    path: "/signup", 
                    element: <Signup></Signup>
                }, 
                {
                    path: "/login", 
                    element: <Login></Login>
                }
            ]
        }
    ]
)
export default router;