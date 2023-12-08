const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = 3001;


var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(express.json());
app.use(cors(corsOptions));
require('./routes/user.routes')(app);
require('./routes/parcel.routes')(app);
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("DB sync failed: " + err.message);
});
