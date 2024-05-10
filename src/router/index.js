import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router