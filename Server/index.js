import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { handleError } from "./middleware/errors.js";
import { globalErrorHandler } from "./Utils/errorHandler.js";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(handleError);

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,authorization,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
console.log(process.env.NODE_ENV);
const CONX_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
mongoose
  .connect(CONX_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () =>
      // console.log("db connexion successful !!"),
      logger.debug("db connexion successful !!"),
    app.listen(PORT, () => console.log(`server running on post : ${PORT}`))
  )
  .catch((error) => console.log(error.message));

app.all("*", (req, res, next) => {
  const err = new Error(`can't find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use(globalErrorHandler);

//mongoose.set('useFindAndModify', false);
