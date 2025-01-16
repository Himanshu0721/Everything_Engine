const bcryptjs = require("bcryptjs");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");

const SingUpHandler = async (req, res) => {
  try {
    const { email, password, username, number } = req.body;

    if (!email || !password || !username || !number) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    const existingUserByUsername = await User.findOne({ username: username });
    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      username,
      number,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
        token,
      },
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
const LogInHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
        token,
      },
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "user fetched successfully",
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch the user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { username, email } = req.body;

    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required." });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.username = username;
    user.email = email;

    await user.save();
    return res
      .status(200)
      .json({ message: "User updated successfully.", user });
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = { SingUpHandler, LogInHandler, updateUser, getUser };
