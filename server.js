const mongoose = require('mongoose');
const express = require('express');
const routes = require("./routes");

// process.env.PORT is used on Heroku to dynamically set the port number
const PORT = process.env.PORT || 3001;

const app = express();  // Express App - Server


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});