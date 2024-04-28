import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";
import { TestimonialProps } from "../types/testimonial";

const testimonialSchema = new Schema({
    stars: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
});

export const TestimonialModel = model<TestimonialProps>(
    IDatabaseSchema.TESTIMONIAL,
    testimonialSchema
);
