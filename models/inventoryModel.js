const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, 'Inventory type required'],
        enum: ['in', 'out']
    },
    bloodGroup: {
        type: String,
        required: [true, 'Blood group required'],
        enum: ['O+','O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
    },
    quantiy: {
        type: Number,
        required: [true, 'Quantity required'],
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Organisation required'],
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function (){
            return this.inventoryType === 'out'
        }
    },
    donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function (){
            return this.inventoryType === 'in'
        }
    }
},{timestamps: true})


module.exports = mongoose.model('Inventory', inventorySchema)