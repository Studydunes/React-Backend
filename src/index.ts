import express from 'express';
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";  
import { ApolloServer } from 'apollo-server-express';
import EventResolver from './resolvers/EventResolver';
import mongoose from 'mongoose';
import cors from 'cors';

const MONGO_URL = `mongodb+srv://admin:sk9tHC4RaKHnDYC6@cluster0-mvguz.mongodb.net/studydunes-react-native?retryWrites=true&w=majority`

async function bootstrap() {
    
    const app = express();
    app.use(cors());
    console.log("hello 1");
    const schema = await buildSchema({
        resolvers: [ProjectResolver, TaskResolver, EventResolver],
        emitSchemaFile: true,
    });

    const server = new ApolloServer({
        schema
    });
    
    server.applyMiddleware({ app, path: '/graphql' });

    mongoose.connect(MONGO_URL,{useUnifiedTopology: true,  useNewUrlParser: true}).then(()=>{
        app.listen(5000)
        console.log("Server is running on http://localhost:5000");
    }).catch(err =>{
        console.log(err)
    });
}

bootstrap();