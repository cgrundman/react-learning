# Food Order App

This is a sample project for a food ordering application. 

The first page is where the user views the menu items and selects which ones to add to cart. The meals are rendered from the dummy back end through an htttp ``GET`` request.

![Food 1](https://github.com/cgrundman/react-learning/blob/main/images/food_1.png)

After selecting the meals, and adding them to the cart, the user can view the cart modal, which displays quantities and prices for all selected items. The user can adjust the quanities, return to meal selection by closing the modal, or go to checkout to fill in information for their order.

![Food 2](https://github.com/cgrundman/react-learning/blob/main/images/food_2.png)

If the user selected "Go to Checkout" on the checkout modal, a modal containing a form is displayed to ask the user to input information needed to complete the order. The information from the form as well as the order details are sent to the ``orders.json`` file in the ``backend\data`` folder.

![Food 3](https://github.com/cgrundman/react-learning/blob/main/images/food_1.png)

Lastly a successfull submission modal is displayed if all informaion in the form is validated as correct. 

![Food 4](https://github.com/cgrundman/react-learning/blob/main/images/food_4.png)