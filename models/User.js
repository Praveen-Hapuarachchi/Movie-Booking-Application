import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        require:true,//if user does not give the user name then system give error msg
    },
    email:{
        type:String,
        require:true,
        unique:true,//does not allow to duplicates
    },
    password:{
        type:String,
        require:true,
        minlength:6,
    },
    bookings:[{type: mongoose.Types.ObjectId, ref: "Bookings"}],
});

export default mongoose.model("User",userSchema);
