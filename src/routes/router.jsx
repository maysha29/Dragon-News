import {createBrowserRouter} from "react-router";
const router=createBrowserRouter([
    {
        path:'/',
        element:<h2>Home Layout</h2>
    },
    {
        path:'/auth',
        element:<h2>Authentication Layout</h2>
    },
    {
        path:'/news',
        element:<h2>News Layout</h2>
    },
    {
        path:'/*',
        element:<h2>Error404</h2>
    },
]);

export default router;