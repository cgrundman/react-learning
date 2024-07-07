# Patterns and Best Practices

This project is a basis for patterns and best practices within Ract devopment. Two main cases are on display here: comound components (for the Accordion compnent) and Render Props (for the search fields)

The page is a basic page for a fake travel agency. Below is the home page. Two main sections exist: the Accordian that has dropdown content and the search terms that demostrate using multiple types of list formats.

![Patterns 1](https://github.com/cgrundman/react-learning/blob/main/images/patterns_1.png)

The Accordion component has a main component, and sub components (AccordionItem, AccordionTitle, AccordionContent) that render different content. Context is used to share the id for each Accordion item from AccordionItem to AccordionTitle/AccordionContent.

![Patterns 2](https://github.com/cgrundman/react-learning/blob/main/images/patterns_2.png)

The search bars use Render Props to handle the searching through the list. The functionality is handled through `useRef` and `setTimeout` to prevent too many updates in the case of sending html requests for the searching. 

![Patterns 3](https://github.com/cgrundman/react-learning/blob/main/images/patterns_3.png)