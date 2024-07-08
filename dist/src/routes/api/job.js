"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobController_1 = require("../../controllers/jobController");
const jobRouter = express_1.default.Router();
jobRouter.post("/create", jobController_1.createAndAddJobController);
jobRouter.post("/delete/:id", jobController_1.deleteJobController);
exports.default = jobRouter;
