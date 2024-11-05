import { fireEvent, render, screen, within } from '@testing-library/react';
import TaskContainer from '.';

describe('tests for the container that holds the tasks', () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    const handleClick = jest.fn();

    beforeEach(() => {
        // Renders the component before each tests.
        render(<TaskContainer tasks={items} removeTask={handleClick} />);
    });

    test('checks if the counter for how many tasks are left is present.', () => {
        const taskCounter = screen.getByTestId('taskCounter');
        expect(taskCounter).toBeInTheDocument();
    })

    test('checks if the counter displays the correct number of tasks', () => {
        const taskCounter = screen.getByTestId('taskCounter');
        expect(taskCounter).toHaveTextContent('3');
    })

    test('checks if the headline for the task container is present.', () => {
        const taskHeadline = screen.getByText('Your Tasks');
        expect(taskHeadline).toBeInTheDocument();
    })

    test("Tests if the headline display correct text based on the number of tasks.", () => {
        render(<TaskContainer tasks={[]} removeTask={handleClick}/>);
        const taskHeadline = screen.getByText('You do not have any tasks to do!');
        expect(taskHeadline).toBeInTheDocument();
    })

    test('check if the tasks provided by the dummy list is present.', () => {
        items.forEach((item, index) => {
            const task = screen.getByText(item);
            expect(task).toBeInTheDocument();
        })
    });

    test('renders tasks in the correct order', () => {
        const taskElements = screen.getAllByRole('listitem');
        expect(taskElements[0]).toHaveTextContent('Item 1');
        expect(taskElements[1]).toHaveTextContent('Item 2');
        expect(taskElements[2]).toHaveTextContent('Item 3');
    });
    

    test("Tests if the button can get a function and execute it.", () => {
        const taskToBeDeleted = screen.getByText('Item 2').closest('li');
        expect(taskToBeDeleted).toBeInTheDocument();
        if(taskToBeDeleted){
            const deleteButton = within(taskToBeDeleted).getByRole('button', {name: /delete/i})
            fireEvent.click(deleteButton);
            expect(handleClick).toHaveBeenCalledWith(1);
        }
    });
})