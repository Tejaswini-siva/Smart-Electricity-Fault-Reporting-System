const express = require("express");
const app = express();
const path = require("path");

const faultRoutes = require("./routes/faultRoutes");

app.use(express.json());
app.use("/faults", faultRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
