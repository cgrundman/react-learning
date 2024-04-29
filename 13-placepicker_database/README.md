# Database Requests with http

This sample project outlines how to handle database requests in react. From the previous place picker app from section 9, a backend was added with all of the locations for the app. This simulates making http requests to a database to be loaded into the app. The requests are made with `fetch()` and the `async` components and `await` for optimistic rednering. Optimistic rendering simply means calling the front end user display while the data is being loaded. This makes a smoother user experience.

As with the last project, the site loads and displays a list of places, sorted by proximity to user. The user can then select places of interest.

![Database 1](https://github.com/cgrundman/react-learning/blob/main/images/database_1.png)

Imprtant with database calls are updates to the user when they fail. This project has many error mesage displays to show when a request did not work as expected. The following image shows the error message when the call path is incorect and does not find places to load into the application.

![Database 2](https://github.com/cgrundman/react-learning/blob/main/images/database_2.png)

The final image shows the modal that is displayed when an image that was selected is not fetched.

![Database 3](https://github.com/cgrundman/react-learning/blob/main/images/database_3.png)
