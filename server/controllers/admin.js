import Location from '../models/Location.js';
import Package from '../models/Package.js';

const date = new Date();
const format = {
    dd: formatData(date.getDate()),
    mm: formatData(date.getMonth() + 1),
    yyyy: date.getFullYear(),
    HH: formatData(date.getHours()),
    hh: formatData(formatHour(date.getHours())),
    MM: formatData(date.getMinutes()),
    SS: formatData(date.getSeconds()),
  };

export const getAdmin = async (req, res) => {
    try {
        const { id } = req.params;  //get the id of user from the request 
        const user = await User.findById(id); //find the user with the id using the models/user.js
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const registerPackage = async (req, res) => {
    try{
         const {
            packageId,
            packageName,
            packageType, 
            packageWeight,
            senderFirstName,
            senderLastName,
            recieverFirstName,
            recieverLastName,
            recieverEmail,
            recieverPhone,
            currentStatus, 
            currentLocation,
            time, 
            date,
            pieces,
            origin,
            destination,
            startDate,
         } = req.body;

         const myParcel = await Package.find({ packageId: packageId});

         const newPackage  = new Package({
            packageId: myParcel.packageId, 
            packageName: myParcel.packageName,
            packageType: myParcel.packageType, 
            packageWeight: myParcel.packageWeight,
            senderFirstName: myParcel.senderFirstName,
            senderLastName: myParcel.senderLastName,
            recieverFirstName: myParcel.recieverFirstName,
            recieverLastName: myParcel.recieverLastName,
            recieverEmail: myParcel.recieverEmail,
            recieverPhone: myParcel.recieverPhone,
            currentStatus, 
            currentLocation,
            time: format.hh, 
            date: format.dd,
            pieces: myParcel.pieces,
            origin: myParcel.origin,
            destination: myParcel.destination,
            startDate: myParcel.startDate,
         }); 
         const savedPackage = await newPackage.save();
         res.status(201).json(savedPackage);
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