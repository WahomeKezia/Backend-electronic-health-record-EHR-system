const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('Enter you database connection  link here ', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
