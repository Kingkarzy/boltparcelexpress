import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
    locationName:{
        type: String, 
        required: true,
        min:2,
        max:50,
    }
});

const Location = mongoose.model("Location", LocationSchema);
    
export default Location