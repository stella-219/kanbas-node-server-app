import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    number: { type: String, required: true },
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    departments: String,
    image: String,
    credits: Number,
}, { collection: "courses" });

export default courseSchema;