import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface UserProfileProps {
  user: User;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-profile" data-testid="user-profile">
      <h2>{user.name}</h2>
      <p className="email">{user.email}</p>
      <span className="role" data-testid={`role-${user.role}`}>
        {user.role === 'admin' ? '👑 Admin' : '👤 User'}
      </span>
      <div className="actions">
        {onEdit && (
          <button onClick={onEdit} aria-label="Edit user">
            Edit
          </button>
        )}
        {onDelete && user.role !== 'admin' && (
          <button onClick={onDelete} aria-label="Delete user" className="delete-btn">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};