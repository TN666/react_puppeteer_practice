import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import TodoButton from './button';

describe('Button Test', () => {

  test('call mock function after clicking on the button', () => {
    const mockFunc = jest.fn();

    render(
      <TodoButton 
        onButtonClick={mockFunc}
      />   
    ); 

    const todoButton = screen.getByText('my button')
    
    userEvent.click(todoButton);
    expect(mockFunc.mock.calls.length).toBe(1);
    userEvent.click(todoButton);
    expect(mockFunc.mock.calls.length).toBe(2);

  });
});
