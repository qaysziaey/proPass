const mongoose = require('mongoose');

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log('db already connected');
    return global.mongoose.conn;
  } else {
    global.mongoose.promise = global.mongoose.promise || mongoose.promise;
    global.mongoose.conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    return global.mongoose.conn;
  }
}
