import { ApiService } from './api';

// Mock fetch globally
global.fetch = jest.fn();

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
    (fetch as jest.MockedFunction<typeof fetch>).mockClear();
  });

  describe('getUsers', () => {
    test('fetches users successfully', async () => {
      const mockUsers = [
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
      ];

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify(mockUsers), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      );

      const users = await apiService.getUsers();
      
      expect(users).toEqual(mockUsers);
      expect(fetch).toHaveBeenCalledWith('https://api.example.com/users');
    });

    test('throws error on failed fetch', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(null, { status: 500 })
      );

      await expect(apiService.getUsers()).rejects.toThrow('Failed to fetch users');
    });
  });

  describe('createUser', () => {
    test('creates user successfully', async () => {
      const newUser = { name: 'New User', email: 'new@example.com' };
      const createdUser = { id: 3, ...newUser };

      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify(createdUser), {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
        })
      );

      const result = await apiService.createUser(newUser);
      
      expect(result).toEqual(createdUser);
      expect(fetch).toHaveBeenCalledWith(
        'https://api.example.com/users',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        })
      );
    });
  });
});