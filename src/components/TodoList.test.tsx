import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TodoList } from './TodoList';

describe('TodoList Component', () => {
  test('renders with initial empty state', () => {
    render(<TodoList />);
    
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    expect(screen.getByText('Total: 0')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    await user.type(input, 'Learn Testing');
    await user.click(addButton);
    
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
    expect(screen.getByText('Total: 1')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('adds todo on Enter key press', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Learn React{Enter}');
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  test('toggles todo completion', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    await user.type(input, 'Test todo{Enter}');
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    await user.type(input, 'To be deleted{Enter}');
    
    const deleteButton = screen.getByText('Delete');
    await user.click(deleteButton);
    
    expect(screen.queryByText('To be deleted')).not.toBeInTheDocument();
    expect(screen.getByText('Total: 0')).toBeInTheDocument();
  });

  test('does not add empty todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const addButton = screen.getByText('Add');
    await user.click(addButton);
    
    expect(screen.getByText('Total: 0')).toBeInTheDocument();
  });
});