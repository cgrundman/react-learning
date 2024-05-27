import { Outlet } from "react-router-dom";

import EventNavigation from "../components/EventsNavigation.js"

function EventLayout() {
    return (
        <>
            <EventNavigation />
            <Outlet />
        </>
    )
}

export default EventLayout;