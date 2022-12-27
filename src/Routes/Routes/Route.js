import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask";

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
            ]
        }
    ]
)
export default router;