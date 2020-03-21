require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/social", require("./controller/soicalService"));
app.use("/notifications", require("./controller/notisService"));

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log("listening");
});
