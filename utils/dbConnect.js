import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    // const db = await mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // });


    const db = mongoose.connect("mongodb://localhost:27017/hemle", {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });

    //connection.isConnected = db.connections[0].readyState;

}

export default dbConnect;

