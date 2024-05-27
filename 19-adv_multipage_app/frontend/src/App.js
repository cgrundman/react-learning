import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.js";
import EventsPage, { loader as eventsLoader} from "./pages/Events.js";
import EventDetailPage from "./pages/EventDetail.js";
import NewEventPage from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";
import RootLayout from "./pages/Root.js";
import EventLayout from "./pages/EventsRoot.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { 
        path: '/events', 
        element: <EventLayout />,  
        children: [
          { 
            index: true, 
            element: <EventsPage />, 
            loader: eventsLoader,
          },
          { path: ':eventId', element: <EventDetailPage />},
          { path: 'new', element: <NewEventPage />},
          { path: ':eventId/edit', element: <EditEventPage />},
        ]
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
