"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_CONFIG = {
    MONGO_URI: process.env.MONGO_URI || "mongodb+srv://admin:admin@cluster0.4y9kbzs.mongodb.net/scheduler-service",
};
const RMQ_INFO = {
    CONNECTION_URI: process.env.RMQ_URI || "amqp://localhost",
};
const ROUTING_KEY = {
    ACTION_KEY: process.env.ACTION_KEY || "",
};
const EXCHANGE = {
    WORK_FLOW_MANAGER: {
        TYPE: process.env.WORK_FLOW_MANAGER_EXCHANGE_TYPE || "",
        NAME: process.env.WORK_FLOW_MANAGER_EXCHANGE_NAME || "",
    }
};
const Constants = {
    DB_CONFIG,
    RMQ_INFO,
    ROUTING_KEY,
    EXCHANGE
};
exports.default = Constants;
