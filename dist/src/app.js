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
const express_1 = __importDefault(require("express"));
const DbUitls_1 = require("./utils/DbUitls");
const job_1 = __importDefault(require("./routes/api/job"));
const body_parser_1 = __importDefault(require("body-parser"));
let app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Middleware to parse URL-encoded bodies
app.use(body_parser_1.default.urlencoded({ extended: true }));
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, DbUitls_1.connectMongodb)();
    // await RmqUtil.initiateInstance(Constants.RMQ_INFO.CONNECTION_URI);
}))();
app.use("/", job_1.default);
exports.default = app;
