// import exp from "constants";
// import mongoose from "mongoose";
// import { type } from "os";



// // Why we are using timestamps so whenever we are changing the time we can change that time and because of this timestamps we can see the updated and created time 
// const UserSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//     },
// },{timestamps:true});

// export default mongoose.models?.User || mongoose.model("User, UserSchema");

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

// Registering the schema correctly
export default mongoose.models.User || mongoose.model("User", UserSchema);
