export interface ApiUser {
    id: number;
    name: string;
    email: string;
  }
  
  export class ApiService {
    private baseUrl: string;
  
    constructor(baseUrl: string = 'https://api.example.com') {
      this.baseUrl = baseUrl;
    }
  
    async getUsers(): Promise<ApiUser[]> {
      const response = await fetch(`${this.baseUrl}/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    }
  
    async getUser(id: number): Promise<ApiUser> {
      const response = await fetch(`${this.baseUrl}/users/${id}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    }
  
    async createUser(user: Omit<ApiUser, 'id'>): Promise<ApiUser> {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return response.json();
    }
  }