import mongoose from 'mongoose';


async function ConnectDB() {
    const envData = `${process.env.MONGODB_URL}${process.env.MONGODB_PASSWORD}@cluster0.baynw.mongodb.net`
    try {
        return mongoose.connect(envData);
    } catch (error) {
        console.log("Error whiile connectiing to db");

    }
}
export default ConnectDB;
