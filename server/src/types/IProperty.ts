import { PuppetType } from "./PuppetType";

export interface IProperty {
    name: string;
    type: PuppetType;
    possibleValues: string[] | null;
}