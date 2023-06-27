import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { NovaConta } from "../pages/NovaConta";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/cadastrar', element: <NovaConta/>}
        ]
    }
])