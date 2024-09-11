import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    doctorsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    bedsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bed'
    }]
})

export const Hospital = mongoose.model('Hospital', hospitalSchema);