import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe('InputForm Component test', () => {
    //mock click function.
    const handleClick = jest.fn();
    test("Test if the button component is present.", () => {
        render(<Button label="button" onClick={() => {}}/>);
        const buttonElement = screen.getByText("button");
        expect(buttonElement).toBeInTheDocument();
    });

    test("Test if the label renders correctly", () => {
        render(<Button label="button" onClick={() => {}}/>);
        const buttonElement = screen.getByText("button");
        expect(buttonElement).toHaveTextContent("button");
    });

    test("Tests if the button can get a function and execute it.", () => {
        render(<Button label="button" onClick={handleClick}/>);
        const button = screen.getByText('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1)
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(2)
    });


});
