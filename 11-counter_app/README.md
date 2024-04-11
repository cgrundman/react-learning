# Counter App

This app is mainly to show how react builds an application. This application introduces the `useMemo` and `useCallback` in context of building an app faster. Finally, millions.js is used to reduce latency. This is not an optimal implementation of millions, but a basic introduction.

The app works by accecting an initial value. By default this is '0', but one can be set manually at the top.

<img src="https://github.com/cgrundman/react-learning/blob/main/images/counter_app_1.png" />

Once an initial value is set, the application also checks if this is a prime number. The value can then be incremented up or down and the history is displayed below. This history is reset if a new value is set manually or if the app is reloaded.

<img src="https://github.com/cgrundman/react-learning/blob/main/images/counter_app_2.png" />

Ultimately this is not a very useful application in itself, however it can show how React is working behind the scenes to make an application work.
