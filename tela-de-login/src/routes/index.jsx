import { Routes, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { NovaConta } from "../pages/NovaConta";
import { Home } from "../pages/Home";
import { PagLogado } from "../pages/PagLogado";



// const Private = ({item}) => {
//     const signed = false

//     return signed ?
// }


export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/cadastrar', element: <NovaConta/>},
            {path: '/dashboard', element: <PagLogado/>},
            
        ]
    }

    
])

