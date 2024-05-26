import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.js"

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;