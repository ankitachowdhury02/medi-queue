import { asyncHandler } from "../utils/asyncHandler.js";
import { Doctor } from '../models/doctorModel.js'

const doctorRegisterController = asyncHandler(async (req, res) => {
    const { name, about, specification, yearOfExperience, hospitalId, timings } = req.body;
    if ([name, about, specification, yearOfExperience, timings].some(field => field?.trim === "")) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all fields'
        })
    }

    const doctor = await Doctor.create({
        name,
        about,
        specification,
        yearOfExperience,
        hospitalId,
        timings
    })
    if (!doctor) {
        return res.status(400).json({
            success: false,
            message: 'Invalid doctor data'
        })
    }

    res.status(201).json({
        success: true,
        message: 'Doctor registered successfully',
        data: doctor,
    })
})

export { doctorRegisterController }