const { findUserByEmail, createUser } = require("../models/queries");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await createUser(name, email, hashedPassword);
    res.status(201).json({ message: "User Registered Successfully", user: newUser });
  } catch (error) {
    console.error("Error Registering: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      return res.status(201).json({ message: "Login Successfull" });
    }

    return res.status(404).json({ messsage: "Invalid Credentials" });

  } catch (error) {
    console.error("Error Loggin in: ", error);
    res.status(500).json({ messsage: "Server error" });
  }
}

module.exports = { registerUser, loginUser };