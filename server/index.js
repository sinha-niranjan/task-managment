const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const taskRoute = require("./routes/task.route.js");
const connectDB = require("./dbconnection.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/task", taskRoute);
app.get("/health", (_, res) => {
  return res.status(200).json({
    success: true,
    message: "health of api is good !!",
  });
});

connectDB();
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
