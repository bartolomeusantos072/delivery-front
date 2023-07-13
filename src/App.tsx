import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./pages/Layout";
import Categories from "./pages/Categories";


function App() {
    const router = createBrowserRouter(createRoutesFromElements (
        <Route path="/" element={<Layout/>}>
            <Route index element={<Categories/>}/>
            <Route path="/categorias/:id/products" element={<Products />} />
            <Route path="/product-details/:ids" element={<ProductDetails />}/>
            
        </Route>
    ));    
    return (
        <RouterProvider router={router}/>
    )
}

export default App
