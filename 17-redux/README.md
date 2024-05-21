# Introduction to Redux

This is a counter application that serves as an introduciton to redux. 

This app manages states in slices via ``createSlice`` from Redux Toolkit, found in ``auth-slice.js`` and ``counter-slice.js`` and served by ``configureStore`` in ``index.js`` from the store folder. The counter slice includes the counter and all of the counter actions, same for the auth slice. The react components can use these state slices via ``useDispatch`` and ``useSelector``.

The app handles the counter slice within the Counter component. The authentication slice is managed in the Header and App Component. The image below shows the authentication not active (the login form and the empty header).

![Redux 1](https://github.com/cgrundman/react-learning/blob/main/images/redux_1.png)

The image below shows the authentication active state (My User Profile section and the added buttons on the header.) As a note, the counter hase 4 actions:
1. Increment: increases the counter by 1
2. Decrement: decreases the counter by 1
3. Increase by 10: +10
4. Toggle Counter: Show or Hide counter

![Redux 2](https://github.com/cgrundman/react-learning/blob/main/images/redux_2.png)