"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAndAddJob = createAndAddJob;
exports.deleteJob = deleteJob;
const node_schedule_1 = __importDefault(require("node-schedule"));
const JobModel_1 = __importDefault(require("../models/JobModel"));
const eventHelper_1 = require("./eventHelper");
const workflow_manager_utils_1 = require("@flairlabs/workflow-manager-utils");
function createAndAddJob(ip) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("woking...");
        let { pattern, data, startDate, endDate } = ip;
        console.log(" still woking...");
        let newJob = yield JobModel_1.default.create({ pattern, data, startDate, endDate });
        console.log("new Job : ", newJob);
        newJob.save();
        console.log(" still still woking...");
        // schedule.scheduleJob(newJob._id, {start: startDate, end: endDate, rule: pattern}, ()=> {
        //     publishEvent(data, uuidV4(), newJob._id, "", "");
        // });
        // return { jobId: newJob._id }
        node_schedule_1.default.scheduleJob(newJob._id.toHexString(), { start: startDate, end: endDate, rule: pattern }, () => {
            (0, eventHelper_1.publishEvent)(data, (0, workflow_manager_utils_1.uuidV4)(), "abc", "", "");
        });
        return { jobId: newJob._id.toHexString() };
    });
}
function deleteJob(jobId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield JobModel_1.default.deleteOne({ _id: jobId });
        node_schedule_1.default.cancelJob(jobId);
        return;
    });
}
