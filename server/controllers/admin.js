import Location from '../models/Location.js';
import Admin from '../models/Admin';

const date = new Date();
const format = {
    dd: date.getDate(),
    yyyy: date.getFullYear(),
    HH:date.getHours(),
    hh: date.getHours(),
  };


  /**  ADMIN LOG IN */
export const getAdmin = async (req, res) => {
    try {
        const { id } = req.params;  //get the id of admin from the request 
        const admin = await Admin.findById(id); //find the admin with the id using the models/admin.js
        console.log(admin);
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

/** REGISTER AN ADMIN*/

export const registerAdmin = async (req, res) => {
    try {
        const {
            firstName, 
            lastName, 
            email, 
            password
        }=req.body;
        const salt = await bcrypt.genSalt(password);
        const passwordHash = await bcrypt.hash(password, salt);

        const newAdmin = new Admin({
            firstName, 
            lastName, 
            email, 
            password:passwordHash
        });
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

/** REGISTER A NEW PACKAGE */
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


/** REGISTER A NEW LOCATION  */

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


/** DELETE A PACAKGE  */

export const updatePackage = async (req, res) => {
    try{
        const {id } = req.params;
        const { userId } = req.body;
        const post = await Package.findById(id);
        const package  = post.
    }
}


/** UPDATE A PACKEGE */
