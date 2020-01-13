"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_1 = require("apollo-datasource");
const await_to_js_1 = __importDefault(require("await-to-js"));
const event_1 = __importDefault(require("../models/event"));
class EventsDatasource extends apollo_datasource_1.DataSource {
    constructor() {
        super();
    }
    static getInstance() {
        EventsDatasource.eventsDatasource = new EventsDatasource();
        return EventsDatasource.eventsDatasource;
    }
    async getAllEvents() {
        const [err, data] = await await_to_js_1.default(event_1.default.find());
        if (err || !data || data.length === 0)
            throw err || new Error("No Event found");
        const events = [];
        data.forEach(doc => {
            events.push(doc);
        });
        return events;
    }
    async addEditEvent(eventInput) {
        const event = new event_1.default({
            title: eventInput.title,
            description: eventInput.description,
            price: eventInput.price,
            date: new Date(eventInput.date)
        });
        const [err, data] = await await_to_js_1.default(event.save());
        console.log("DD", data);
        if (err || !data || data.length === 0)
            throw err || new Error("Error Saving Event");
        // const event: <Event> = data
        return event;
    }
}
exports.EventsDatasource = EventsDatasource;
//# sourceMappingURL=EventsDatasource.js.map