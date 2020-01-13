
import { Field, ObjectType, InputType } from "type-graphql";


@ObjectType()
export default class Event {
    @Field()
    _id?: string;

    @Field()
    title?: string;

    @Field()
    description?: string;

    @Field()
    price?: number;

    @Field()
    date?: string;

}

@InputType()
export class EventInput {
    @Field()
    title!: string;

    @Field()
    description!: string;

    @Field()
    price!: number;

    @Field()
    date!: string;

    constructor(title: string, description: string, price: number,
        date: string) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
    }
}