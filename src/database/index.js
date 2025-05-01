import mongoose from "mongoose";
const connectToDB=async()=>{
    const connectionUrl="mongodb+srv://s3jmpc:R9LjqRoZ4pF2GoeU@test.e45dcqa.mongodb.net/?retryWrites=true&w=majority&appName=test";
    mongoose.connect(connectionUrl)
    .then(()=>console.log('connection is sucessfull'))
    .catch(error=>console.log(error));

};


export default connectToDB;