import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = () => {


    return <>
        <header><Header></Header></header>
        <main><Outlet></Outlet></main>
        <footer><Footer></Footer></footer>


    </>

}