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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let Event = class Event {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Event.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Event.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Event.prototype, "date", void 0);
Event = __decorate([
    type_graphql_1.ObjectType()
], Event);
exports.default = Event;
let EventInput = class EventInput {
    constructor(title, description, price, date) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
    }
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EventInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EventInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], EventInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EventInput.prototype, "date", void 0);
EventInput = __decorate([
    type_graphql_1.InputType(),
    __metadata("design:paramtypes", [String, String, Number, String])
], EventInput);
exports.EventInput = EventInput;
//# sourceMappingURL=Event.js.map