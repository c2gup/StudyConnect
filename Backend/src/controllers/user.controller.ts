import { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';


export const register: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password, role, department, collegeId, year } = req.body;

    console.log('Registering user:', {
      name,
      email,
      role,
      department,
      collegeId,
      year
    });


    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      department,
      collegeId,
      year,
    });

    await user.save();

    return res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    return res.status(500).json({ message: 'Registration failed', error: err });
  }
};


export const login: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // You can generate a token here (e.g., JWT) in the future
    return res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    return res.status(500).json({ message: 'Login failed', error: err });
  }
};