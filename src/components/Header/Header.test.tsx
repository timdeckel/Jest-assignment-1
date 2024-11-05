import { render, screen } from "@testing-library/react";
import Header from ".";

describe('Tests for the header component.', () => {

    test("Checks if the Header component is rendered", () => {
        render(<Header/>)
        const headerComponent = screen.getByTestId('headerComponent')
        expect(headerComponent).toBeInTheDocument()
    })

    test("Renders the Page title", () => {
        render(<Header/>)
        const headerText = screen.getByText("To Do List")
        expect(headerText).toBeInTheDocument()
    })
})