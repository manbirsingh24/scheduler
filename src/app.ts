import express from "express";
import { connectMongodb } from "./utils/DbUitls";
import jobRouter from "./routes/api/job"
import bodyParser from "body-parser";


let app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
  await connectMongodb();
  // await RmqUtil.initiateInstance(Constants.RMQ_INFO.CONNECTION_URI);
})();

app.use("/", jobRouter)

export default app;
