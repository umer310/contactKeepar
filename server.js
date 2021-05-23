const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

//Init Middleweare
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcom  to the Contact keeper APi" })
);

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//Server static  assets in productopm
if (process.env.NOOD_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
