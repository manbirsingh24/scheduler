import schedule from "node-schedule";
import JobDetailModel from "../models/JobModel";
import { publishEvent } from "./eventHelper";
import { uuidV4 } from "@flairlabs/workflow-manager-utils";

export async function createAndAddJob(ip:{ pattern: string, data: any, startDate?:string, endDate?:string }): Promise<{ jobId: string; }> {
    
    console.log("woking...")
    let { pattern, data, startDate, endDate } = ip;
    console.log(" still woking...")
    
    let newJob = await JobDetailModel.create({ pattern, data, startDate, endDate });
    console.log("new Job : ",newJob)
    newJob.save();
    console.log(" still still woking...")

    // schedule.scheduleJob(newJob._id, {start: startDate, end: endDate, rule: pattern}, ()=> {
    //     publishEvent(data, uuidV4(), newJob._id, "", "");
    // });

    // return { jobId: newJob._id }

    schedule.scheduleJob(newJob._id.toHexString(),{start: startDate, end: endDate, rule: pattern}, ()=> {
        publishEvent(data, uuidV4(), "abc", "", "");
    });

    return { jobId: newJob._id.toHexString()}



}

export async function deleteJob(jobId: string): Promise<void> {
    
    await JobDetailModel.deleteOne({_id: jobId})

    schedule.cancelJob(jobId);
    
    return 
}


