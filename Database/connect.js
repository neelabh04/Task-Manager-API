const mongoose = require("mongoose");
const connectDatabase = (url) => {
return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to the Database"))
    .catch((err) => console.log(err));
}

module.exports = connectDatabase