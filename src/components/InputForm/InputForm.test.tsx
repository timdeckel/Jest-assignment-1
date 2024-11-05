import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from '.'; 

describe('InputForm Component test', () => {
    test('adds a task to the task list', () => {
        render(<InputForm />);

        const input = screen.getByPlaceholderText('Write what you need to do here!');
        fireEvent.change(input, { target: { value: 'New Task' } });

        const addButton = screen.getByText('Add Task');
        fireEvent.click(addButton);

        expect(screen.getByText('New Task')).toBeInTheDocument();
    });

    test('removes a task from the task list', () => {
        render(<InputForm />);
        
        const input = screen.getByPlaceholderText('Write what you need to do here!');
        fireEvent.change(input, { target: { value: 'Task to Remove' } });
        
        const addButton = screen.getByText('Add Task');
        fireEvent.click(addButton);

        expect(screen.getByText('Task to Remove')).toBeInTheDocument();

        const removeButton = screen.getByText('delete'); 
        fireEvent.click(removeButton);

        expect(screen.queryByText('Task to Remove')).not.toBeInTheDocument();
    });

    test('check if several task can be added' , () => {
        render(<InputForm/>);
        const input = screen.getByPlaceholderText('Write what you need to do here!');

        fireEvent.change(input, { target: { value: 'Task 1' } });
        fireEvent.click(screen.getByRole('button', { name: /Add task/i }));

        fireEvent.change(input, { target: { value: 'Task 2' } });
        fireEvent.click(screen.getByRole('button', { name: /Add task/i }));

        const tasks = screen.getAllByRole('listitem');
        expect(tasks).toHaveLength(2);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    test('Integration test for inputForm and Taskcontainer', () => {
        render(<InputForm/>);
        const input = screen.getByPlaceholderText('Write what you need to do here!');
        const taskCounter = screen.getByTestId('taskCounter')

        fireEvent.change(input, { target: { value: 'Task 1' } });
        fireEvent.click(screen.getByRole('button', { name: /Add task/i }));

        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(taskCounter).toHaveTextContent('1')

        fireEvent.change(input, { target: { value: 'Task 2' } });
        fireEvent.click(screen.getByRole('button', { name: /Add task/i }));

        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(taskCounter).toHaveTextContent('2')
    });

    test("Tests if the taskContainer components headline changes based on if there are tasks or not.", () => {
        render(<InputForm/>);
        const dynamicHeadline = screen.getByTestId('taskCounterHeadline')
        const input = screen.getByPlaceholderText('Write what you need to do here!');

        expect(dynamicHeadline).toHaveTextContent('You do not have any tasks to do!')

        fireEvent.change(input, { target: { value: 'Task 1' } });
        fireEvent.click(screen.getByRole('button', { name: /Add task/i }));

        expect(dynamicHeadline).toHaveTextContent('Your Tasks')

    })
    
});