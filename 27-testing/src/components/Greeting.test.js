import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        // ... nothing
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was not clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const greetingElement = screen.getByText("good to see you", { exact: false})
        expect(greetingElement).toBeInTheDocument();
    });

    test('render "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const greetingElement = screen.getByText('Changed!');
        expect(greetingElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was not clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const greetingElement = screen.queryByText("good to see you", { exact: false});
        expect(greetingElement).toBeNull();
    });
})