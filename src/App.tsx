import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./layouts/Layout";
import Categories from "./pages/Categories";
import ErrorPage from "./pages/ErroPage";
import { AppProvider } from "./context/AppContext";
import Cart from "./pages/Cart";


function App() {
    const router = createBrowserRouter( [
        {
            path:"/",
            element:<Layout/>,
            errorElement: <ErrorPage />,
            children:[
                {
                    index:true,
                    element:<Categories/>,
                    errorElement: <ErrorPage />,
                },
                {
                    path:"/categorias/:id/products",
                    element:<Products/>,
                    errorElement: <ErrorPage />,
                },
                {
                    path:"/product-details/:ids",
                     element:<ProductDetails />,
                     errorElement: <ErrorPage />,
                },
                {
                    path:"/cart",
                     element:<Cart />,
                     errorElement: <ErrorPage />,
                }
            ],
        }
    ]);    
    return (
        <AppProvider>
            <RouterProvider router={router}/>
        </AppProvider>
    )
}

export default App