import {HorseClass, HorseType} from "./1";

// DEMO: We can stub out riders also, of course
//       Methods are pulled in, but must be compatible.

type RiderType = { canRideHorse: (horse: HorseType) => boolean; }

export interface Rider extends RiderType {
    // canRideHorse(horse: HorseType): boolean;
    // canRideHorse(horse: HorseType): string;

    // canRideHorse(horse: HorseType): void;
    // canRideHorse(horse: HorseType): never;
    // canRideHorse(horse: HorseType): any;
    // canRideHorse(horse: HorseType): unknown;
}
interface NonRider extends RiderType {
    canRideHorse(horse: HorseType): false;
}




// DEMO: Compatibility is done under the covers with & -- intersection
//       boolean & string = never
//       boolean & false = false
//
// DEMO: And the same idea applies to maps and interfaces combine maps

type HasName = { name: string }
type HasNameAndCanRideMethod = RiderType & HasName

class SimpleRider implements Rider, HasNameAndCanRideMethod {
    constructor(public name: string, public canRide: boolean) {}
    canRideHorse(horse: HorseType) { return this.canRide; }
}

// DEMO: We also have "union" types: boolean|'unknown', and 'any'

export function canRiderRide(rider: any, horse: HorseType): boolean|'unknown' {
    if (!rider?.canRideHorse) return 'unknown';
    return (rider as RiderType).canRideHorse(horse);
}

const jockE = new SimpleRider("Jock E", true);
const redrum = new HorseClass("Redrum", 4);
console.log("Can ride1? ", canRiderRide(jockE, redrum) );


// DEMO: What if we want to specify named horses?


// class SomeHorsesRider implements Rider {
//     constructor(public name: string, public selectedHorses: HorseType[]) {}
//     canRideHorse(horse: HorseType) {
//         return !!this.selectedHorses.find(h => h == horse);
//     }
// }
//
// const pickE = new SomeHorsesRider("Pick E", [redrum]);
// console.log("Can ride2? ", canRiderRide(pickE, redrum) );
//
// // DEMO: But could we elegantly do selected horses, or any horse with just one class???
