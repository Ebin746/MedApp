const UserSchema = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login controller
const login = async (req, res) => {
    const { phoneNumber, password } = req.body;
    try {
        const user = await UserSchema.findOne({ phoneNumber }).populate('medicines');
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user._id, phoneNumber: user.phoneNumber },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token,user });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Sign up controller
const signUp = async (req, res) => {
    const { phoneNumber, password, email } = req.body;
    try {
        const existingUser = await UserSchema.findOne({ phoneNumber });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "Username or email already in use" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserSchema({
            phoneNumber,
            password: hashedPassword,
            email,
        });
        await newUser.save();
        res.status(201).json({ message: "Sign-up successful" });
    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { signUp, login };
