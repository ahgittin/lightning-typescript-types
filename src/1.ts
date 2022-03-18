
// DEMO: you can define JS classes and/or TS types

export class HorseClass {
    readonly name: string;
    readonly legs: number;
    constructor(name: string, legs: number) {
        this.name = name;
        this.legs = legs;
    }
}

export type HorseType = {
    name: string;
    legs: number;
}


// DEMO: duck typing - if it walks like a duck and talks like a duck, assume it's a duck

// class HorseClassRecord {
//     constructor(public name: string, public legs: number) {}
// }
//
// class NotHorseClassRecord {
//     constructor(public name: string, public wings: number) {}
// }
//
// function canRide(rider: any, horse: HorseType) {
//     return true;
// }
//
// canRide("Jock E", new HorseClass("Redrum", 4));
//
// //canRide("Baby Monk E", new NotHorseClassRecord("Pig", 2));