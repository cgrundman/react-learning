# React Query

This is an event app showcasing how to handle react querying between frontend and backend. The events are stored in the backend and then queried and pulled to the frontend with the use of react query.

The main page is loaded with an initial query for events. All querying is managed by ``http.js``, which uses the ``QueryClient``.

![Query 1](https://github.com/cgrundman/react-learning/blob/main/images/query_1.png)

Essential to querying is searching for related items related to a search term. This is a basic use of ``useQuery`` to pull relevant information.

![Query 2](https://github.com/cgrundman/react-learning/blob/main/images/query_2.png)

Creating a new event makes use of the ``useMutation`` hook, that provides functionality to change information in the backend, instead of just pulling it. This function uses pending state, error state, and an error to provide feedback to the user whether their event was created successfully or not.

![Query 3](https://github.com/cgrundman/react-learning/blob/main/images/query_3.png)

The event page loads the event data for that particular event id, and displays the information. The event content is displayed conditionally. ``useQuery`` returns not only the data, but also whether the data is loading or pending, if there is an error, and the error itself if there is an error.

![Query 4](https://github.com/cgrundman/react-learning/blob/main/images/query_3.png)

Editing the event pulls a modal that already contains all of the current information of the event. The information can siply be changed and those changes pushed to the backend. ``queryClient.invalidateQueries`` reloads the event data after the event has been edited, to reflect the changes.

![Query 5](https://github.com/cgrundman/react-learning/blob/main/images/query_3.png)

Finaly, delete event handling is done though another ``useMutation`` that then deletes the event data on the back end and returns to the user to the main page. Through the ``onSuccess`` property within the mutate finction, ``queryClient.invalidateQueries`` invalidates the event information and reloads the events. This prevents the deleted event from beeig seen.

![Query 6](https://github.com/cgrundman/react-learning/blob/main/images/query_3.png)