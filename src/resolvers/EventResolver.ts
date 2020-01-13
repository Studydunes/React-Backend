
import { Query, Resolver, Mutation, Arg} from "type-graphql";
import "reflect-metadata";
import Event, { EventInput } from "../schemas/Event";
import to from 'await-to-js'
import { EventsDatasource } from "../dataSources/EventsDatasource";
import { ApolloError } from "apollo-server-express";

const eventDS: EventsDatasource = EventsDatasource.getInstance();

@Resolver(of => Event)
export default class {
   
    @Query(returns => [Event])
    async getAllEvents(): Promise<Array<Event>> {
        const [err, data] = await to(eventDS.getAllEvents())
        if (err || !data)
            throw new ApolloError(err)
        console.log("DATA",data);
        return data
    }

    @Mutation(returns => Event)
    async addEditEvent(@Arg("eventInput") eventInput: EventInput): Promise<Event> {
        const [err, data] = await to(eventDS.addEditEvent(eventInput));
        if (err || !data)
            throw new ApolloError(err)
        console.log("DATA",data);
        return data
    }

}
