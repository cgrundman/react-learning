# Advanced Redux

This is a shopping application that serves as an advanced showcase of redux.

This app build on the functinoal slices, ``createSlice``, as first seen in the previous project. However, this app uses Firebase as a backend to interact with. Chiefly, the shopping cart is updated by the user on the front end, while the cart is saved and stored on the backend in a .json.

The app is very simple. The avaiable items are show by default. Each item has a "Add to Cart" button to add the item into cart. The total number of items is displayed in the "My Cart" button in the header. When adding items to the cart, the app contacts the Firebase backend, displaying a pending, successful, or failed notification above the header. 

![Advanced Redux 1](https://github.com/cgrundman/react-learning/blob/main/images/redux_adv_1.png)

The shopping cart itself can be displayed, the display is toggled by clicking "My Cart". Items can further be added and removed from the "+" and "-" buttons. This again shows the notification of pending, succceccful, or failed communication with the backend.

![Advanced Redux 2](https://github.com/cgrundman/react-learning/blob/main/images/redu_adv_2.png)

Special to this app from the others, the app loads the previous app state upon reload. This is simply a feature of firebase to save variables.