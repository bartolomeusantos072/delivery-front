import About from "./About";
import Categories from "./Categories";
import Header from "../components/Header";
export default function Home() {

    return <main className="container">
    <Header/>
    <div className="row position-relative">
        <aside className="col-lg-3">
            <About/>
        </aside>
        <section className="col-lg-9 mt-5 pt-5">
            <Categories/>
        </section>
    </div>
</main>

}
