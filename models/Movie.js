import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    actors:[{type:String, required:true}],
    releaseDate:{
        type: Date,
        required:true,
    },
    posterUrl:{
        type: String,
        required: true,
    },
    featured:{
        type: Boolean,
    },
    booking:[{type:String}],
    admin:{
        type:String,
        required:true,
    },

});

export default mongoose.model("Movie",movieSchema);