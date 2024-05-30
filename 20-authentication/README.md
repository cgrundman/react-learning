# Authentication

This application building on the routing section, and adds authenticaiton to the events app.

This includes signup/login pages. The signup simply adds any email and password without qualification to the backend. The login page takes the email and password and checks for credential in the backend. If either of these operations are successful, a ``token`` is stored in local storage. Interestingly, no particularly special react hooks are used for authentication. Just good ol' javascript and the react that has already been covered.

On the home page, a link to authentication is added. When the user is logged in, the link is replaced by a logout button. 

![Authentication 1](https://github.com/cgrundman/react-learning/blob/main/images/auth_1.png)

The authentication page is redendered simply with a ``Form`` hokk from ``react-router-dom``.

![Authentication 2](https://github.com/cgrundman/react-learning/blob/main/images/auth_2.png)

Finally, there is conditional rendering on the state or existance of the ``token``. In the event detail page, the edit and delete buttons are not rendered if there is no token (user not logged in). The token is pulled into the event component via ``useRouteLoaderData``. The routes are also protected through the use of a custom function from ``auth.js`` in the ``util`` folder.

![Authentication 3](https://github.com/cgrundman/react-learning/blob/main/images/auth_3.png)