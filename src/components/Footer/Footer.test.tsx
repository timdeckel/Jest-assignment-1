import { render, screen } from "@testing-library/react";
import Footer from ".";

describe('Tests for the header component.', () => {
    render(<Footer/>);
    
    test('contains the correct text', () => {
        const footerText = screen.getByText(/this is a footer!/i);
        expect(footerText).toHaveTextContent('This is a Footer!');
    });

    test('has correct structure', () => {
        const { container } = render(<Footer />);
        const footerDiv = container.querySelector('div');
        const footerParagraph = container.querySelector('p');
        expect(footerDiv).toBeInTheDocument();
        expect(footerParagraph).toBeInTheDocument();
    });
})