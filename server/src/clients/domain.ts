import { guardAgainstEmptyArgument, guardAgainstInvalidEnumArgument } from '../core';

export class Client {
    constructor(
        public id: string,

        public title: Title,
        public firstName: string,
        public lastName: string,

        public country: Country,
        public postalCode: string) {
            guardAgainstEmptyArgument(() => id);
            guardAgainstInvalidEnumArgument(Title, () => title);
            guardAgainstEmptyArgument(() => firstName);
            guardAgainstEmptyArgument(() => lastName);
            guardAgainstInvalidEnumArgument(Country, () => country);
        }

        static fromObject(o: any): Client {
            return new Client(o.id, o.title, o.firstName, o.lastName, o.country, o.postalCode);
        }
}

export enum Title {
    Mrs,
    Ms,
    Mr
}

export enum Country {
    Germany,
    UnitedKingdom
}
