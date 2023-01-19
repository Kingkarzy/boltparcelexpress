import Parcel from '../models/Parcel.js';

/** READ THE TRACKING NUMBER  */

export const getTrackId = async (req, res) => {
    try {
        const { packageId } = req.params;
        const myParcel = await Parcel.findById(packageId);
        res.status(200).json(myParcel);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getTrackIdDetails = async (req, res) =>{
    try {
        const { packageId } = req.params;
        const myParcel  = await Parcel.findById(packageId);

        const packages = await Promise.all(
            myParcel.packages.map((packageId) => Parcel.findById(packageId))
        );
        const formattedPack = packages.map(({ 
            _id, 
            packageId,   
            currentLocation, 
            currentStatus, 
            time, 
            date, 
            pieces  //arrange it 
        }) => {
                return { 
                    _id, 
                    packageId,   
                    currentLocation, 
                    currentStatus, 
                    time, 
                    date, 
                    pieces 
                }; //send it to the front end
            }
        );
        res.status(200).json(formattedPack);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
