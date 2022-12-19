var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

const SALT = 10;

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Full Name is required!'],
        maxlength: 100
    },
    name_with_initials: {
        type: String,
        required: [true, 'Name with Initials is required!'],
        maxlength: 200
    },
    gender: {
        type: String,
        required: [true, 'Gender is required!'],
        maxlength: 10
    },
    nic_number: {
        type: String,
        required: [true, 'NIC is required!'],
        unique: true,
        maxlength: 100
    },
    Email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        maxlength: 100
    },
    contact_num: {
        type: String,
        required: [true, 'Contact number is required!'],
        unique: true,
        maxlength: 100
    },
    address: {
        type: String,
        required: [true, 'Address is required!'],
        maxlength: 200
    },
    district: {
        type: String,
        required: [true, 'District is required!'],
        maxlength: 100
    },
    divitional_secretariat: {
        type: String,
        required: [true, 'Divitional Secretariat is required!'],
        maxlength: 100
    },
    gramaniladhari_divition: {
        type: String,
        required: [true, 'Gramaniladhari Division is required!'],
        maxlength: 100
    },
    username: {
        type: String,
        required: [true, 'User Name is required!'],
        unique: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        unique: true,
        maxlength: 100
    },
    confirm_password: {
        type: String,
        required: [true, 'Confirm Password is required!'],
        unique: true,
        maxlength: 100
    },
    role:{
        type: String,
        enum: UserRole,
        default: UserRole.OFFICER
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//saving user data
UserSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        //checking if password field is available and modified
        bcrypt.genSalt (SALT, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = { User }