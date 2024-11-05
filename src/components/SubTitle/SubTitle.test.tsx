import { render, screen } from "@testing-library/react";
import SubTitle from ".";

test("Renders the Subtitle", () => {
    render(<SubTitle text="Organise your life" />)  
    const SubTitleText = screen.getByRole("heading", {level: 3});
    expect(SubTitleText).toHaveTextContent("Organise your life");
})