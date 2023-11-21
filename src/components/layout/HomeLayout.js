import { Outlet } from "react-router-dom";

import Footer from "../pages/partials/footer/Footer";

import "./layout.scss";

function HomeLayout() {
    return (
        <div className="private__layout">
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;