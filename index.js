const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// seting up the middlewares
app.use(bodyParser.json({ limit: "25mb" }));
app.use(cors());
app.use(express.static("public"));
app.use(morgan("dev"));

// user routes
app.use(require("./routes"));

require("./lib/db.config")
  .then(() => {
    // start the server
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => {
      console.log("app started on prot: " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
