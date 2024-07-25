const mongoose = require('mongoose');
const { string, number } = require('zod');

mongoose.connect('mongodb+srv://aashisomething:aashisomething12@cluster0.lxwukjz.mongodb.net/')


const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstName: String,
    lastname : String

})
 const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
 })
const User = mongoose.model('user', userSchema);
const Account = mongoose.model('account', accountSchema)

module.exports = {
    User,
    Account
}