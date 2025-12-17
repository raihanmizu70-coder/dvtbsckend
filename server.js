require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/submit", require("./routes/submit"));
app.use("/api/withdraw", require("./routes/withdraw"));
app.use("/api/admin", require("./routes/admin"));

app.get("/", (req, res) => {
  res.send("DVT Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
