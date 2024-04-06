# Shopping App

This is a bsic shopping app that uses: `createContext`, `useContext`, and `useReducer`. The main focus is to prevent prop drilling. This is where a parent component generates its state and passes it down as props to its children componetnts that do not consume them. THe children components instead meraly pass down the props to their own children components. This problem creates more boiler plate code and is generally bad practice.

This app features 6 clothing items with associated prices. The user can simply click "Add to Cart" and the item quantity is updated in the cart. The home page is shown below:

<img src="https://github.com/cgrundman/react-learning/blob/main/images/shopping_app_1.png" />

The cart can then be shown through a modal, activated upon clicking on "Cart" on the top of the page.

<img src="https://github.com/cgrundman/react-learning/blob/main/images/shopping_app_2.png" />

The app handles the cart through the shopping-cart-context.jsx. The states are handled through context, so that the components can use or update the cart as needed without drilling.
