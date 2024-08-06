// import express from 'express';
// import User from '../models/User.js';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// // Signup Route
// router.post('/signup', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ message: 'Please provide email and password' });
//         }

//         const user = await User.create({ email, password });

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.status(201).json({ token, user });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ message: 'Please provide email and password' });
//         }

//         const user = await User.findOne({ email });

//         if (!user || !(await user.matchPassword(password))) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ token, user });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// export default router;
