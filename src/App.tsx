import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./pages/components/Header";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";


function App() {
    const router = createBrowserRouter(createRoutesFromElements (
        <>
            <Route path="/" element={<Home/>}/>
            <Route path="/categorias/:id/products" element={<Products />} />
            <Route path="/product-details/:ids" element={<ProductDetails />}/>
            
        </>
    ));    
    return (
        <main className="container">
            <Header/>
            <div className="row position-relative">
                <aside className="col-lg-3">
                    <About/>
                </aside>
                <section className="col-lg-9 mt-5 pt-5">
                    <RouterProvider router={router}/>
                </section>
            </div>
        </main>

    )
}

export default App
