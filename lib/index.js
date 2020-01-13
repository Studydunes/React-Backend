"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const ProjectResolver_1 = __importDefault(require("./resolvers/ProjectResolver"));
const TaskResolver_1 = __importDefault(require("./resolvers/TaskResolver"));
const apollo_server_express_1 = require("apollo-server-express");
const EventResolver_1 = __importDefault(require("./resolvers/EventResolver"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const MONGO_URL = `mongodb+srv://admin:sk9tHC4RaKHnDYC6@cluster0-mvguz.mongodb.net/studydunes-react-native?retryWrites=true&w=majority`;
async function bootstrap() {
    const app = express_1.default();
    app.use(cors_1.default());
    console.log("hello 1");
    const schema = await type_graphql_1.buildSchema({
        resolvers: [ProjectResolver_1.default, TaskResolver_1.default, EventResolver_1.default],
        emitSchemaFile: true,
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema
    });
    server.applyMiddleware({ app, path: '/graphql' });
    mongoose_1.default.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
        app.listen(5000);
        console.log("Server is running on http://localhost:5000");
    }).catch(err => {
        console.log(err);
    });
}
bootstrap();
//# sourceMappingURL=index.js.map