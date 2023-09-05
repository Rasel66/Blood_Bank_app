const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: 'string',
        required: [true, "Role is required"],
        enum: ["admin","organisation","donar","hospital"]
    },
    name: {
        type: 'string',
        required: function(){
            if(this.role === 'donar' || this.role === 'admin'){
                return true;
            }
            return false;
        }
    },
    organisationName: {
        type: 'string',
        required: function(){
            if(this.role === 'organisation'){
                return true;
            }
            return false;
        }
    },
    hospitalName: {
        type: 'string',
        required: function(){
            if(this.role === 'hospital'){
                return true;
            }
            return false;
        }
    },
    email: {
        type: 'string',
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: 'string',
        required: [true, "Password is required"]
    },
    website: {
        type: 'string',
    },
    address: {
        type: 'string',
        required: [true, "Address is required"]
    },
    phone: {
        type: 'string',
        required: [true, "Phone number is required"]
    }
},{timestamps: true});

module.exports = mongoose.model('users', userSchema)