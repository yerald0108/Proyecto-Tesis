import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage, Ilegalidades, Nosotros } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'ilegalidades',
                element: <Ilegalidades />,
            },
            {
                path: 'nosotros',
                element: <Nosotros />,
            },
        ],
    },
]);
  
