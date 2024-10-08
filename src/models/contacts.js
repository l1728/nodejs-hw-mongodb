import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: undefined,
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: ['work', 'home', 'personal'],
        required: true,
        default: 'personal',
        },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        },
    photo: {
        type: String,
        default: null,

    }
},
{
    timestamps: true,
    versionKey: false,
},
);

 const Contact = mongoose.model('contact', contactSchema);

export { Contact };
