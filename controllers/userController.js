import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function saveUser(req, res) {
    if (req.body.role == "admin") {
        if (req.user == null) {
            res.status(401).json({
                message: "Please login before creating an admin account",
            });
            return;
        }
        if (req.user.role != "admin") {
            res.status(403).json({
                message: "You are not authorized to create an admin account",
            });
            return;
        }
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        role: req.body.role,
    });

    user.save()
        .then(() => {
            res.json({ message: "User Saved successfully" });
        })
        .catch(() => {
            res.status(500).json({ message: "User Not Saved" });
        });
}

export function loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then((user) => {
        if (user == null) {
            res.status(402).json({ message: "Invalid email" });
            return;
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            res.status(403).json({ message: "Invalid password" });
            return;
        }

        const userData = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            isDisabled: user.isDisabled,
            isEmailVerified: user.isEmailVerified,
        };

        const token = jwt.sign(userData, process.env.JWT_SECRET || "rondom456");

        res.json({
            message: "Login success",
            token: token,
        });
    });
}
