const { User } = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { getUser, setUser } = require('../auth/auth')
const signupController = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userExist = await User.findOne({ email });

    if (!userExist) {
        await User.create({
            name, email, password
        });
        return res.json({ msg: "User created Successfuly!" });
    } else {
        return res.json({ msg: "User already Exist!" });
    }

}

const loginController = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sessionID = uuidv4();
    
    await setUser(sessionID, email);
    const user = await User.findOne({ email, password });
    if (user) {
        return res.json({ msg: "Login Successfuly!" })
    } else {
        return res.json({ msg: "Check Email or Password!" })
    }
}

module.exports = { signupController, loginController }