import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

/** REGISTER Admin */

export const register = async (req, res) => {
  try {
    const {
      //frontend display
      firstName,
      lastName,
      email,
      password,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      //hide password
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin); // user saved
  } catch (error) {
    res.status(500).json({ error: error.message }); //user not saved  error
  }
};

/* ADMIN LOG IN   */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; //get the email and passwod when the user tries to login
    const admin = await Admin.findOne({ email: email }); //find the user with this email
    if (!admin) return res.status(400).json({ msg: 'Admin does not exist' });

    const isMatch = await bcrypt.compare(password, admin.password); //{check if password is the same the user.password in the db}
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
    delete admin.password; //so it doesn't get sent back to the frontend
    res.status(200).json({ token, admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
