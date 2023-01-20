import mongoose from "mongoose";

const adminIds =  new mongoose.Types.ObjectId();

export const admin = [
  {
    _id: adminIds,
    firstName: "fakeAdmin",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
  },
];

export const packages = [
  {
    _id: new mongoose.Types.ObjectId(),
    packageId: "123456789",
    packageName: "NOthing but rose",
    packageType: "frigile", 
    packageWeight: "20kg",
    senderFirstName: "fakesender",
    senderLastName: "mia",
    recieverFirstName:"Steve",
    recieverLastName: "Ralph",
    recieverEmail: "receiver@gmail.com",
    recieverPhone: 789848849,
    currentStatus: "ON ROUTE LA", 
    currentLocation: "ON THE MOVE",
    time: "12:23", 
    date: "12-12-2022",
    pieces: 12,
    origin:"us",
    destination: "netherland",
    startDate: "2015-02-12",
    locationName: ["California, USA", "GHANA"],
  },
];

export const location = [
  {
    _id: new mongoose.Types.ObjectId(),
    locationName: "California, USA",
  },
];


