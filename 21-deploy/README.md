# Deployment

This is a simple blog app to show how to deploy a react application. This project introduces the ``build`` feature from ``react-scripts``. This creates a version of the codebase that can be served onto a server.  

Firebase was used a hosting platform. Simply login to your account (or create one). Create a new project and open that project page. Go to Build>Hosting, and the commands are there to download the firebase library and set up a project. 

![Deploy 1](https://github.com/cgrundman/react-learning/blob/main/images/deploy_1.png)

Above and below, you can see the pages for the blog application. Lazy loading is implemented for the blog list and the content using the ``lazy`` hook from react. This means that the pages are not loaded for initially, and are only loaded when the pages are requested. This is very helpful for larger applications with pages that are not used often. Lazy loading prevents the loaded data from bein too large, so the application can run smoother. 

![Deploy 2](https://github.com/cgrundman/react-learning/blob/main/images/deploy_2.png)

The ``build`` creates a single javascript file will all commmands and relevent libraries. As you can see, it is not readble but rather in a form that can be compiled by the hosting server.

![Deploy 3](https://github.com/cgrundman/react-learning/blob/main/images/deploy_3.png)