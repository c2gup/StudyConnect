// src/interfaces/user.interface.ts

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
  department: string;
  collegeId: string;
  year: number;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}
