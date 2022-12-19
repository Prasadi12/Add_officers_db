const { default: mongoose } = require("mongoose");
const { User } = require("../models/UserModel");

/*exports.registerUser =  (req, res) => {
    const user = new User(req.body);

    user.save(err, doc); {
        if(err) {
            return res.status(422).json({
                success: false,
                message: "Please enter unique email & username!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully Registered!"
            });
        }
    }
};*/

exports.registerUser = async (req, res) => {
    const user = new User(req.body);

    await user.save((err, doc) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Please enter unique email & username!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully Signed Up!"
            });
        }
    });
};