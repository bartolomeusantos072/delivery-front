
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import About from "./About";

export default function Layout() {

    return (
        <main className="container">
        <Header/>
        <div className="row">
            <aside className="col-lg-3">
                <About/>
            </aside>
            <section className="col-lg-9 mt-5 pt-5">
                <Outlet/>       
            </section>
        </div>
    </main>
    );
  }
  