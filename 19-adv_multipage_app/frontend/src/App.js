import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.js";
import EventsPage, { loader as eventsLoader} from "./pages/Events.js";
import EventDetailPage, { loader as eventDetailLoader} from "./pages/EventDetail.js";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";
import RootLayout from "./pages/Root.js";
import EventLayout from "./pages/EventsRoot.js";
import ErrorPage from "./pages/Error.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { 
                path: 'edit', 
                element: <EditEventPage />
              },
            ],
          },
          { 
            
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ]
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
