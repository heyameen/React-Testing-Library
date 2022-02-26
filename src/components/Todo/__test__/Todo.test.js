import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    const buttonElement = screen.getByRole("button", {name: /Add/i})

    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement)
    })
}

describe('Todo', () => {  

   beforeEach(() => {
    render(<MockTodo/>)
   })
    
  it('should render same text passed into title prop', async () => {    
    addTask(["we out here"])
    const divElement = screen.getByText(/We out here/i)
    expect(divElement).toBeInTheDocument();
  });
  
  it('should render a list of tasks', async () => {
    addTask(["Watch the unit testing course", "Clean home", "run errands"])
    const divElement = screen.getAllByTestId("task-container")
    expect(divElement.length).toBe(3);
  });
  
  it('should not have completed class when initially rendered', async () => {
    addTask(["Clean home"])
    const divElement = screen.getByText(/Clean Home/i)
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it('should have completed class when clicked', async () => {
    addTask(["Clean home"])
    const divElement = screen.getByText(/Clean Home/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active");
  });
})