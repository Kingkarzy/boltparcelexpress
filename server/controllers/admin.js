import Parcel from '../models/Parcel.js';
import Customer from '../models/Customer.js';
import Location from '../models/Location.js';
import Package from '../models/Package.js';

export const getAdmin = async (req, res) => {
    try {
        const { id } = req.params;  //get the id of user from the request 
        const user = await User.findById(id); //find the user with the id using the models/user.js
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const registerCustomer = async (req, res) => {
    try{
         const {
            recieverFirstName, 
            recieverLastName, 
            recieverEmail, 
            recieverPhone, 
            senderFirstName, 
            senderLastName, 
            packageId, 
            packageName, 
            origin, 
            destination, 
            startDate
         } = req.body;

         const newCustomer  = new Customer({
            recieverFirstName,
            recieverLastName, 
            recieverEmail, 
            recieverPhone, 
            senderFirstName,
            senderLastName, 
            packageId, 
            packageName, 
            origin, 
            destination, 
            startDate
         }); 
         const savedCustomer = await newCustomer.save();
         res.status(201).json(savedCustomer);
    }catch(error) {
        res.status(500).json({error: error.message}); 
    }
}

export const registerPackage = async (req, res) => {
    try{
         const {
            packageId,  
            packageType, 
            packageWeight, 
            pieces,
         } = req.body;
         const myParcel = await Customer.findById(packageId);
         const newPackage  = new Package({
            packageId: myParcel.packageId, 
            packageName: myParcel.packageName,
            packageType, 
            packageWeight,
            senderFirstName: myParcel.senderFirstName,
            senderLastName: myParcel.senderLastName,
            recieverFirstName: myParcel.recieverFirstName,
            recieverLastName: myParcel.recieverLastName, 
            pieces,
         }); 
         const savedPackage = await newPackage.save();
         res.status(201).json(savedPackage);
    }catch(error) {
        res.status(500).json({error: error.message}); 
    }
}
export const registerParcel = async (req, res) => {
    try{
         const {
            packageId, 
            currentStatus,
            currentLocation,
            time,
            date,
            pieces,
         } = req.body;

         const myParcel = await Parcel.findById(packageId);

         const newParcel  = new Parcel({
            packageId: myParcel.packageId,
            packageName: myParcel.packageName,
            currentStatus,
            currentLocation,
            time,
            date,
            pieces: myParcel.pieces,
         }); 
         const savedParcel = await newParcel.save();
         res.status(201).json(savedParcel);
    }catch(error) {
        res.status(500).json({error: error.message}); 
    }
}

export const registerLocation = async (req, res) => {
    try{
         const {
           locationName
         } = req.body;

         const newLocation  = new Location({
            locationName
         }); 
         const savedLocation = await newLocation.save();
         res.status(201).json(savedLocation);
    }catch(error) {
        res.status(500).json({error: error.message}); 
    }
}