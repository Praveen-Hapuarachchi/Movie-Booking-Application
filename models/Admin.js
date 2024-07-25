import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        unique : true,
        require : true,
    },
    password:{
        type:String,
        require : true,
        minlength: 6,
    },
    addedMovies:[
        {
            type:String,
        },
    ],
});

export default mongoose.model("Admin",adminSchema);//Store data to Admin Schema in database