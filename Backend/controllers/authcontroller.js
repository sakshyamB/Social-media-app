const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.PostSignUp = [
  body("username")
    .notEmpty()
    .withMessage("Username shouldn't be empty.")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Username should be between 3 to 20 characters.")
    .matches(/^[a-zA-Z ]+$/)
    .withMessage("Username should only contain characters and spaces."),

  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email is invalid."),

  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters."),

  async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists." });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      return res.status(200).json({ message: "User created successfully", user: savedUser });
    } catch (hashError) {
      return res.status(500).json({ error: "Couldn't save user." });
    }
  },
];

exports.PostLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Couldn't find the user." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid password." });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );

  return res.status(200).json({
    message: "Logged-in successfully.",
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
