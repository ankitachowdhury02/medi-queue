import mongoose from "mongoose";
import { string } from "zod";

const doctorModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    about: {
        type: string,
        require: true
    },
    specialization: {
        type: string,
        require: true
    },
    yearOfExperience: {
        type: Number,
        required: true,
    },
    hospitalId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }],
    timings: [{
        day: { type: string, required: true },
        startTime: { type: string, required: true },
        endTime: { type: string, required: true },
    }]
})

export const Doctor = mongoose.model('Doctor', doctorModel);