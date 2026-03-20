import { Schema } from "mongoose";

const travelSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    date: { type: Date, required: true },
})