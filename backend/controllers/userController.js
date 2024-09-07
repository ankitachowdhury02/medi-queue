import { User } from "../models/userModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerController = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if ([name, email, password].some(fields => fields?.trim() === '')) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields'
        })
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: 'User already exists!! Please login'
        })
    }

    const newUser = await User.create({ name, email, password })
    if (!newUser) {
        return res.status(400).json({
            success: false,
            message: 'Invalid user data'
        })
    }

    const user = await User.findById(newUser._id).select('-password');
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Invalid user data'
        });
    }

    const token = newUser.token();
    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Error in generating token'
        });
    }

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: user,
        token: token
    })

})

const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if ([email || password].some(fields => fields?.trim() === '')) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields'
        })
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email or password'
        })
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email or password'
        })
    }

    const token = user.token();
    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Error in generating token'
        })
    }

    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: user,
        token: token
    })
})

const logoutController = asyncHandler(async (req, res) => {

})

export { registerController, loginController, logoutController }