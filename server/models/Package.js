import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({

    packageId: {
        type: Number,
        required: true,
        min:999, 
        max:999999999,
    },
    packageName:{
        type: String,
        required: true, 
        min:2,
        max:50,
    },
    packageType:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    packageWeight:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    senderFirstName:{
        type: String, 
        min:2,
        max:50,
    },
    senderLastName:{
        type: String, 
        min:2,
        max:50,
    },
    recieverFirstName:{
        type: String, 
        min:2,
        max:50,
    },
    recieverLastName:{
        type: String, 
        min:2,
        max:50,
    },
    recieverEmail:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    recieverPhone:{
        type: Number,
        min:99999999,
        max:99999999999,
    },
    currentStatus:{
        type: Array, 
        default: [],
        required: true,
    },
    currentLocation:{
        type: Array, 
        default: [],
    },
    time:{
        type: Array, 
        default: [],  
    },
    date:{
        type: Array, 
        default: [],
        required: true,
    },
    pieces:{
        type: Number, 
    },
    origin:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    destination:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    startDate:{
        type: Date, 
    }, 

    }, {timestamps: true});

const Package = mongoose.model("Package", PackageSchema);
    
export default Package 