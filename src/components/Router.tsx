import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { Error } from "./Error";
import { Animal } from "./animal";


export const Router = createBrowserRouter([
    {



        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />,
            errorElement: <Error />,
            index: true
        },
        {
            path: "/:name",
            element: <Animal />
        }]


    }

]);