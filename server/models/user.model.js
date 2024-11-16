import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        trim : true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
        trim : true,
    },
    password:{
        type : String,
        required : true,
        select: false,
        
    }
}, {timestamps : true});

const User = mongoose.model("User", userSchema);
