import express from "express";
import {
  createAndAddJobController,
  deleteJobController,
} from "../../controllers/jobController";
const jobRouter = express.Router();

jobRouter.post("/create", createAndAddJobController);
jobRouter.post("/delete/:id", deleteJobController);

export default jobRouter;
