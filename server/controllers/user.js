import Package from '../models/Package.js';

/** READ THE TRACKING NUMBER  */

export const getTrackId = async (req, res) => {
    try {
        const  packageID = req.params['packageId']; //get the packgeid from the url
        const myParcel = await Package.find({packageId: packageID }); // packageId: packageID  go the models and check the Package for packageId
        console.log('myParcel');
        res.status(200).json(myParcel);
    } catch (error) {
        res.status(404).json(`page not found, ${error.message}`);
    }
}


//** MORE DATAILED PACKAGE DETAILS  */

// 
// export const getTrackIdDetails = async (req, res) =>{
//     try {
//         const  {packageId} = req.params;
//         const myParcel  = await Package.findById(packageId);

//         const packages = await Promise.all(
//             myParcel.packages.map((packageId) => Package.findById(packageId))
//         );
//         const formattedPack = packages.map(({ 
//             _id, 
//             packageId,   
//             currentLocation, 
//             currentStatus, 
//             time, 
//             date, 
//             pieces  //arrange it 
//         }) => {
//                 return { 
//                     _id, 
//                     packageId,   
//                     currentLocation, 
//                     currentStatus, 
//                     time, 
//                     date, 
//                     pieces 
//                 }; //send it to the front end
//             }
//         );
//         res.status(200).json(formattedPack);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }