import { Request, Response } from "express";
import { createAndAddJob } from "../helpers/jobHelper";
import {deleteJob} from "../helpers/jobHelper"



export async function createAndAddJobController(req:Request, res:Response){
    console.log("req.body : ",JSON.stringify(req.body))
    let data = await createAndAddJob(req.body);
    return res.status(200).json(data)
}

export async function deleteJobController(req:Request, res:Response){
    const {id} = req.params;
    let data = await deleteJob(id);
    return res.status(200).json(data)
}