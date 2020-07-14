import mongoose from "mongoose";


export default URI => {
  const dbOptions = {
    poolSize: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  };
  mongoose.promise = global.promise
  mongoose.connect(URI, dbOptions, async err => {
    if (err) {
      throw new Error(`Error while trying to connect MongoDB ${err}`);
    }
    console.log(`Connected to MongoDB`);
  });

};