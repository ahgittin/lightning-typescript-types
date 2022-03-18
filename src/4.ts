import {HorseClass, HorseType} from "./1";
import {canRiderRide, Rider} from "./3";

// DEMO: The power of union types.
//       TS is super smart about inference here.

type OnlyBoolsAndHorses = boolean|HorseType[]

class RichRider implements Rider {

    constructor(public name: string, public whatCanRide: OnlyBoolsAndHorses) {}

    canRideHorse(horse: HorseType) {
        if (typeof this.whatCanRide=="boolean") return this.whatCanRide;
        return !!this.whatCanRide.find(h => h == horse);
    }
}

const redrum = new HorseClass("Redrum", 4);

const jockE = new RichRider("Jock E", true);
const pickE = new RichRider("Pick E", [redrum]);
const nonE = new RichRider("Non E", []);
const nonF = new RichRider("Non F", false);

console.log("Can ride2?", canRiderRide(jockE, redrum));
console.log("Can ride3?", canRiderRide(pickE, redrum));
console.log("Can ride4?", canRiderRide(nonE, redrum));
console.log("Can ride5?", canRiderRide(nonF, redrum));
