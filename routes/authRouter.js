import { VerifyUserFields } from "../middlewares/verifyUserCreation.js";
import User from "../models/users.js";
import { Router } from "express";
import bcrypt from "bcryptjs";


const authRouter = Router();

authRouter.post("/register", VerifyUserFields , async(req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const emailVerification = await User.findOne({ email });
        if (emailVerification) {
            return res.status(409).json("Email already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ 
            first_name, 
            last_name, 
            email, 
            password: hashedPassword });
        return res.status(201).json(newUser);

    } catch (err) {
        return res.status(400).json("Internal server error");
    }
})

export default authRouter;