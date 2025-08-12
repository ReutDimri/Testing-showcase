import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MealPlanner } from './MealPlanner';

describe('MealPlanner Component', () => {
  test('renders meal planner with initial state', () => {
    render(<MealPlanner />);
    
    expect(screen.getByText('Daily Meal Tracker')).toBeInTheDocument();
    expect(screen.getByText('Calories: 0/2000')).toBeInTheDocument();
    expect(screen.getByText('No meals added yet')).toBeInTheDocument();
  });

  test('adds a meal with full nutrition info', async () => {
    const user = userEvent.setup();
    render(<MealPlanner />);
    
    const nameInput = screen.getByLabelText('Meal name');
    const caloriesInput = screen.getByLabelText('Calories');
    const proteinInput = screen.getByLabelText('Protein');
    const addButton = screen.getByText('Add Meal');
    
    await user.type(nameInput, 'Chicken Salad');
    await user.type(caloriesInput, '350');
    await user.type(proteinInput, '30');
    await user.click(addButton);
    
    expect(screen.getByText('Chicken Salad')).toBeInTheDocument();
    expect(screen.getByText('350 cal')).toBeInTheDocument();
    expect(screen.getByText(/P: 30g/)).toBeInTheDocument();
  });

  test('updates totals when meals are added', async () => {
    const user = userEvent.setup();
    render(<MealPlanner />);
    
    await user.type(screen.getByLabelText('Meal name'), 'Test Meal');
    await user.type(screen.getByLabelText('Calories'), '500');
    await user.click(screen.getByText('Add Meal'));
    
    expect(screen.getByText('Calories: 500/2000')).toBeInTheDocument();
  });

  test('deletes a meal', async () => {
    const user = userEvent.setup();
    render(<MealPlanner />);
    
    await user.type(screen.getByLabelText('Meal name'), 'To Delete');
    await user.type(screen.getByLabelText('Calories'), '200');
    await user.click(screen.getByText('Add Meal'));
    
    await user.click(screen.getByText('Delete'));
    
    expect(screen.queryByText('To Delete')).not.toBeInTheDocument();
    expect(screen.getByText('Calories: 0/2000')).toBeInTheDocument();
  });
});