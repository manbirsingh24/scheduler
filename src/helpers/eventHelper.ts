import { IEventInput } from "@flairlabs/workflow-manager-types";
import { RmqUtil } from "@flairlabs/workflow-manager-utils";
import Constants from "../utils/Constants";


export function publishEvent( data: any, requestId:string, jobId:string, orgId:string, apiKey:string){
    let input:any = {
        requestId,
        jobId,
        timeStamp: (new Date()).toISOString(),
        data
    }
    let message: IEventInput = {
        eventName: "SCHEDULER_EVENT",
        input
    }
    const properties: any = {
        headers: {
            'orgId': orgId,
            'apiKey': apiKey,
        }
    };
    
    console.log("message", message);
    // RmqUtil.getInstance().publishMessagesToExchange({
    //     messages: [message],
    //     exchangeName: Constants.EXCHANGE.WORK_FLOW_MANAGER.NAME,
    //     exchangeType: Constants.EXCHANGE.WORK_FLOW_MANAGER.TYPE,
    //     routingKey: Constants.ROUTING_KEY.ACTION_KEY,
    //     properties:properties,
    // })


}