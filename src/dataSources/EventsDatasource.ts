
import { DataSource } from "apollo-datasource";
import to from 'await-to-js';
import EventM from '../models/event'
import Event, { EventInput } from "../schemas/Event";

export interface IEventDatasource {
    getAllEvents(): Promise<Array<Event>>,
    addEditEvent(eventInput:EventInput): Promise<Event> 

}

export class EventsDatasource extends DataSource implements IEventDatasource {
   
    private static eventsDatasource?: EventsDatasource

    constructor() {
        super()
    }

    static getInstance(): EventsDatasource {
        EventsDatasource.eventsDatasource = new EventsDatasource()
        return EventsDatasource.eventsDatasource;
    }

    async getAllEvents(): Promise<Array<Event>> {
        const [err, data] = await to(EventM.find());
        if (err || !data || data.length === 0)
            throw err || new Error("No Event found")
        const events: Array<Event> = []
        data.forEach(doc => {
            events.push(doc)
        })
        return events
    }

    async addEditEvent(eventInput:EventInput): Promise<Event>  {
        const event = new EventM({
            title: eventInput.title,
            description: eventInput.description,
            price: eventInput.price,
            date: new Date(eventInput.date)
        })
        const [err, data] = await to(event.save());
        console.log("DD",data);
        if (err || !data || data.length === 0)
            throw err || new Error("Error Saving Event")
        // const event: <Event> = data
        return event
    }
    

}


