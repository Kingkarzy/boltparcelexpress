import mongoose from 'mongoose';

const ParcelSchema = new mongoose.Schema({
    packageId: {
        type: Number,
        required: true,
        min: 8,
        max: 12,
    }, 
    packageName:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    currentStatus:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    currentLocation:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    time:{
        type: Date,  
        required: true,
        min:2,
        max:50,
    },
    date:{
        type: Date, 
        required: true,
    },
    pieces:{
        type: Number, 
        required: true,
    },
},  {timestamps: true});


const Parcel = mongoose.model("Parcel", ParcelSchema);
    
export default Parcel; 