const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api', apiRoutes);

// Define any API routes before this runs
app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});