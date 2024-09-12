import mongoose from "mongoose";

const bedSchema = new mongoose.Schema({
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    bedNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'booked'],
        default: 'available'
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BedBooking',
        required: false
    }
})

export const Bed = mongoose.model('Bed', bedSchema);