import { Hospital } from "../models/hospitalModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// hospital register controller
const hospitalRegisterController = asyncHandler(async (req, res) => {
    try {
        const { name, description, email, password, city, district, state, zipCode, phoneNumber } = req.body;
        if ([name, description, email, password, city, district, state, zipCode, phoneNumber].some((fields) => fields?.trim() === "")) {
            res.send("Please fill all the fields")
        }

        let profileImagePath = '';
        if (req.file) {
            profileImagePath = req.file.filename;
        } else {
            return res.status(400).json({
                message: 'Profile image is required.'
            });
        }

        const existingHospital = await Hospital.findOne({
            $or: [
                { name: name },
                { email: email }
            ]
        });
        if (existingHospital) {
            return res.status(400).json({
                message: 'A hospital with this name or email already exists.'
            });
        }

        const newHospital = await Hospital.create({
            name,
            description,
            profileImage: profileImagePath,
            email,
            password,
            location: {
                city,
                district,
                state,
                zipCode
            },
            phoneNumber
        });
        if (!newHospital) {
            return res.status(400).json({
                message: 'Invalid hospital data.'
            });
        }

        const token = newHospital.token();
        if (!token) {
            return res.status(400).json({
                message: 'Error in generating token.'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Hospital registered successfully',
            hospital: newHospital,
            token: token
        });

    } catch (error) {
        console.error("Error in hsopital regirstation: ", error);
        res.status(500).json({
            success: false,
            message: `Error in hospital registration ${error.message}`
        });
    }
})

const hospitalLoginController = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        if ([email, password].some((fields) => fields?.trim() === "")) {
            res.send("Please fill all the fields")
        }

        const hospital = await Hospital.findOne({ email }).select("+password");
        if (!hospital) {
            res.send("Hospital not found!")
        }

        const isPasswordCorrect = await hospital.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password'
            })
        }

        const token = hospital.token();
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Error in generating token'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Hospital logged in successfully',
            data: hospital,
            token: token
        })

    } catch (error) {
        console.error("Error in hsopital Login: ", error);
        res.status(500).json({
            success: false,
            message: `Error in hospital Login ${error.message}`
        });
    }
})

export { hospitalRegisterController, hospitalLoginController }