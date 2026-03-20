import { Schema, model } from "mongoose";
import { TTravel } from "../types/travel.interface";

const travelSchema = new Schema<TTravel>({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    price: { type: Number, required: true },
    category: { 
        type: String, 
        enum: ['Half Board', 'All Inclusive', 'Excursions', 'Family'], 
        required: true 
    },
    location: { type: String, required: true },
    image: { type: String, required: true },
    gallery: { type: [String], default: [] }, // ছবির অ্যারে
    duration: { type: String, required: true },
    maxGroupSize: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    status: { 
        type: String, 
        enum: ['available', 'booked-out', 'discounted'], 
        default: 'available' 
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    includedServices: { type: [String], default: [] }, // সুবিধার অ্যারে
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Admin ID এর সাথে কানেক্টেড
}, {
    timestamps: true 
});

// মডেল তৈরি করা
export const Travel = model<TTravel>('Travel', travelSchema);