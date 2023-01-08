import Footer from "components/footer"
import ContextApp from "components/Main"
import NavBar from "components/header"
import Home from "pages/Home"
import SignUp from "pages/SignUp"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Layout() {
    return (
        <>
            <NavBar />
            <main>
                <ContextApp />
            </main>
            <Footer />
        </>
    )
}

export default Layout
