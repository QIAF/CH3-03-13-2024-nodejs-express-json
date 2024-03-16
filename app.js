const express = require("express")
const morgan = require("morgan");
const app = express();


// const customerRouter = require("..routes/customerRouter");
// middleware untuk membaca json dari request body ke kita
app.use(express.json());

// middleware dari third party = 3rd party midleware
app.use(morgan('dev')); // Environtment dev adalah environtment lokal kita

//midleware kita sendiri
app.use((req, res, next) => {
  console.log("Halo FSW 1, ini midlewaware kita sendiri...");
  next();
});

app.use((req, res, next) => {
  req.requesTime = new Date().toISOString();
  next();
});

const defaultRouter = (req, res, next) => {
  res.send("<p>Hello FSW 1 tercinta</p>");
};

const customerRouter = express.Router();
app.use("/api/v1/customers", customerRouter);

// app.get("/", defaultRouter);
// morgan berfungsi ngelog aplikasi kita