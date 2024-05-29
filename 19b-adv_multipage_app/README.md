# React Routing

This application is an event app that serves as an in depth look at routing within React. Routing is a complex topic within React and therefore this app has code covering many different topics.

The code is split into frontend and backend code, with react of course located in the frontend. The app is managed primarily on app.js. The routes are created using ``RouterProvider`` and ``createBrowserRouter``. The app is routed to the pages, while the pages are filled with content from the components. Styling is provided to the components from css modules. 

The following image shows the homepage for the application. This page includes the ``MainNavigation.js`` component that provided links to the home page, the events page, and the newsletter signup. This component is present on all pages for ease of navigation. The links are handled through the ``Navlink`` hook.

![React Routing 1](https://github.com/cgrundman/react-learning/blob/main/images/routing_1.png)

The events page is show below. This page displays all of the events in the app as well as the ``EventsNavigation.js`` component. This component is in all of the events-related pages to add new events or navigate to the events page. The first loader action is defined in the ``Events.js`` page and exported and loaded into the app.js page. This uses the ``defer`` hook from ``react-router-dom``. 

![React Routing 2](https://github.com/cgrundman/react-learning/blob/main/images/routing_2.png)

Upon clicking new page, the ``NewEvent.js`` page is loaded and the ``ÈventForm.js`` component is loaded. This form is created by the ``Form`` hook from react-router-dom and uses the ``useNavigate`` and ``useActionData`` hooks to handle the data from the form and pucsh it back into the backend JSON file. Upon save, the ``redirect`` hook is called to return to the events page.

![React Routing 3](https://github.com/cgrundman/react-learning/blob/main/images/routing_3.png)

Upon return to the Events page, the event that was added in the new event page is rendered.

![React Routing 4](https://github.com/cgrundman/react-learning/blob/main/images/routing_4.png)

The event pages are dynamically routed, the routes are dependent on the ``eventId`` variable. A loader function uses the ``eventId`` to load all of the event data for that event and a seperate loader loads the other events below it. This data is handled by the ``useRouteLoaderData`` hook. 

Another important note is the ``Suspence`` hook. This provides a backup page rendereing as the data loads. As a developer using a local backend and frontend, this is not an issue. But for apps deployed on the cloud for example, the wait times for loading data may harm the user experience if a notification is not provided to indicate that the app is working.

![React Routing 5](https://github.com/cgrundman/react-learning/blob/main/images/routing_5.png)

Finally the page below is the newletter signup. There is formal handling of the emails to the backend, it is just a simple subscription page. 

![React Routing 6](https://github.com/cgrundman/react-learning/blob/main/images/routing_6.png)