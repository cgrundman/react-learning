# User List

This is a sample project to show how class-based components in react. Most modern React applications use function-based components, however class-based components are still relevent. To handle class-based components, hooks used thus far like `useState()` and `useEffect()` do not work as they do in function-based components. 

This app simply displays or hides the names of users. This component (Users.js) shows how to replace `useState()` by using `Component` from react with a `constructor()`. 

![User List 1](https://github.com/cgrundman/react-learning/blob/main/images/user_list_1.png)

The user filter then filters through the users. This filter is done with UserFinder.js. This file replaces `useEffect()` with lifecycle methods like `componentDidUpdate` and `componentDidMount`. 

![User List 2](https://github.com/cgrundman/react-learning/blob/main/images/user_list_2.png)

Finally, error boundary is set up and displayed, when there is no matching user name from the filter. Note: that when using in a developer state, exit out of the dev error display to see the page as pictured below.

![User List 3](https://github.com/cgrundman/react-learning/blob/main/images/user_list_3.png)