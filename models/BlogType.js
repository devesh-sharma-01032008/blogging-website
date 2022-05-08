const mongoose = require('mongoose');

const BlogTypeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl : {type : Number, required: true},
    url: { type: String, required: true }
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("BlogType", BlogTypeSchema)