# Placepicker App

This application incorporated the use of the `useEffect()` hook. `useEffect()` is used to pass an effect after a DOM update. 

The concept of this application is to select differnt locations of interest, and display the list to the user. The locations are displayed in order of proximity to the user (closest first).

<img src="https://github.com/cgrundman/react-learning/blob/main/images/placepicker_1.png" />

The user needs only to select the location from 'Available Places', and the location is added to the box of selected locations. 

<img src="https://github.com/cgrundman/react-learning/blob/main/images/placepicker_2.png" />

If the user wants to remove a location from the selected locations, this can be done by simply clicking on the location to be removed. This action opens a modal that displays a confirm or cancel menu. In addition, this modal has a progress bar that tracks a timer. The time lasts 3 seconds and then automatical closes the modal and romoves the item from the list.

<img src="https://github.com/cgrundman/react-learning/blob/main/images/placepicker_3.png" />
