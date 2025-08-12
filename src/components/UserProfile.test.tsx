import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserProfile } from './UserProfile';

describe('UserProfile Component', () => {
  const mockUser = {
    id: 1,
    name: 'Reut Dimri',
    email: 'reut@example.com',
    role: 'user' as const
  };

  const mockAdmin = {
    ...mockUser,
    role: 'admin' as const
  };

  test('renders user information', () => {
    render(<UserProfile user={mockUser} />);
    
    expect(screen.getByText('Reut Dimri')).toBeInTheDocument();
    expect(screen.getByText('reut@example.com')).toBeInTheDocument();
    expect(screen.getByText('👤 User')).toBeInTheDocument();
  });

  test('shows admin badge for admin users', () => {
    render(<UserProfile user={mockAdmin} />);
    
    expect(screen.getByText('👑 Admin')).toBeInTheDocument();
    expect(screen.getByTestId('role-admin')).toBeInTheDocument();
  });

  test('calls onEdit when edit button is clicked', () => {
    const handleEdit = jest.fn();
    render(<UserProfile user={mockUser} onEdit={handleEdit} />);
    
    fireEvent.click(screen.getByText('Edit'));
    expect(handleEdit).toHaveBeenCalledTimes(1);
  });

  test('does not show delete button for admin users', () => {
    const handleDelete = jest.fn();
    render(<UserProfile user={mockAdmin} onDelete={handleDelete} />);
    
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  test('shows delete button for regular users', () => {
    const handleDelete = jest.fn();
    render(<UserProfile user={mockUser} onDelete={handleDelete} />);
    
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
});