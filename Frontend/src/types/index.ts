export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  year: string;
  major: string;
  bio?: string;
  isSenior: boolean;
  joinedAt: Date;
}

export interface Note {
  id: string;
  title: string;
  subject: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  likes: number;
  downloads: number;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: Date;
  tags: string[];
  likes: number;
  comments: number;
  readTime: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  createdAt: Date;
  likes: number;
}