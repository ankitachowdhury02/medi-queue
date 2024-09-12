import mongoose from "mongoose";

const bedBookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: false
    },
    bedType: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['booked', 'available', 'occupied'],
        default: 'booked'
    }
})

export const BedBooking = mongoose.model('BedBooking', bedBookingSchema);