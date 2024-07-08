"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishEvent = publishEvent;
function publishEvent(data, requestId, jobId, orgId, apiKey) {
    let input = {
        requestId,
        jobId,
        timeStamp: (new Date()).toISOString(),
        data
    };
    let message = {
        eventName: "SCHEDULER_EVENT",
        input
    };
    const properties = {
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
