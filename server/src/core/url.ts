import { guardAgainstEmptyArgument } from './guards';

export class Url {
    constructor(private _url: string) {
        guardAgainstEmptyArgument(() => _url);
    }

    toString(): string {
        return this._url;
    }
}
