const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please tell us your name'],
      minLength: [3, 'Name should be atleast have 3 characters'],
      maxLength: [12, 'Name should not exceed 12 characters'],
    },

    email: {
      type: String,
      trim: true,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: validator.isEmail,
    },

    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minLength: [8, 'Password should contain atleast 8 characters'],
      select: false,
    },

    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords are not the same',
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// virtual populate
userSchema.virtual('orderHistory', {
  ref: 'Checkout',
  localField: '_id',
  foreignField: 'user',
});

userSchema.pre('save', function (next) {
  this.name =
    this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();

  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.checkPassword = async function (canditatePass) {
  return await bcrypt.compare(canditatePass, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
