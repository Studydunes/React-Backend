"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const Event_1 = __importStar(require("../schemas/Event"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const EventsDatasource_1 = require("../dataSources/EventsDatasource");
const apollo_server_express_1 = require("apollo-server-express");
const eventDS = EventsDatasource_1.EventsDatasource.getInstance();
let default_1 = class default_1 {
    async getAllEvents() {
        const [err, data] = await await_to_js_1.default(eventDS.getAllEvents());
        if (err || !data)
            throw new apollo_server_express_1.ApolloError(err);
        console.log("DATA", data);
        return data;
    }
    async addEditEvent(eventInput) {
        const [err, data] = await await_to_js_1.default(eventDS.addEditEvent(eventInput));
        if (err || !data)
            throw new apollo_server_express_1.ApolloError(err);
        console.log("DATA", data);
        return data;
    }
};
__decorate([
    type_graphql_1.Query(returns => [Event_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], default_1.prototype, "getAllEvents", null);
__decorate([
    type_graphql_1.Mutation(returns => Event_1.default),
    __param(0, type_graphql_1.Arg("eventInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event_1.EventInput]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "addEditEvent", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => Event_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=EventResolver.js.map