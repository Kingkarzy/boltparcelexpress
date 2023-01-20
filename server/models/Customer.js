import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
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
    recieverEmail:{
        type: String, 
        required: true,
        min:2,
        max:50,
    },
    recieverPhone:{
        type: Number,
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
    packageId: {
        type: Number,
        required: true,
        min: 8,
        max: 12,
    }, 
    packageName: {
        type: Number,
        required: true,
        min: 8,
        max: 12,
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
        required: true
    }, 
   
}, {timestamps: true});

const Customer = mongoose.model("Customer", CustomerSchema);
    
export default Customer;