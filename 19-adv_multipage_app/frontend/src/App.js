// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.js";
import EventsPage from "./pages/Events.js";
import EventDetailPage from "./pages/EventDetail.js";
import NewEventPage from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";
import RootLayout from "./pages/Root.js";
import EventLayout from "./pages/EventRoot.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/events', 
        element: <EventLayout />,  
        children: [
          { path: '/events', element: <EventsPage />},
          { path: '/events/:eventId', element: <EventDetailPage />},
          { path: '/events/new', element: <NewEventPage />},
          { path: '/events/:eventId/edit', element: <EditEventPage />},
        ]},
      
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
