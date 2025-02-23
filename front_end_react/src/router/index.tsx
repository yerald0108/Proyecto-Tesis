import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <p>Inicio</p>,
            },
            {
                path: 'ilegalidades',
                element: <p>Ilegalidades</p>,
            },
            {
                path: 'nosotros',
                element: <p>Sobre nosotros</p>,
            },
        ],
    },
]);
  
