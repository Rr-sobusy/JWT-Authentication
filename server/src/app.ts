import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as Auth from "./middlewares/AuthUser";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(Auth.AuthUser);

app.get("", (req, res) => {
  res.send("connected");
});

export default app;
