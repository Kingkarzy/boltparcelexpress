import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
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
        required: true,
        min:2,
        max:50,
    },
    senderLastName:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    recieverFirstName:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    recieverLastName:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },

    }, {timestamps: true});

const Package = mongoose.model("Package", PackageSchema);
    
export default Package 