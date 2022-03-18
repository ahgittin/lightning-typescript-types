
// DEMO: Types can go more specific

import {HorseClass, HorseType} from "./1";

export type FourLeggedHorseType = {
    name: string;
    legs: 4;
}

// DEMO: And can extend types -- type intersection
//       These two are equivalent to the above:

export type FourLeggedHorseTypeAlt = HorseType & {
    legs: 4;
}
export type FourLeggedHorseTypeAlt2 = HorseClass & {
    legs: 4;
}



// DEMO: Types can be used in methods, of course, with errors, unless we cast

function canRide4(rider: any, horse: FourLeggedHorseType) {
    return true;
}

// const redrum = new HorseClass("Redrum", 4);
//
// canRide4("Jock E", redrum);
// canRide4("Jock E", redrum as FourLeggedHorseType);
// canRide4("Jock E", redrum as any);




// DEMO: But with generics it can solve it

// class HorseClassRecordGeneric<NumLegs extends number> {
//     constructor(public name: string, public legs: NumLegs) {}
// }
//
// canRide4("Jock E", new HorseClassRecordGeneric("Redrum", 4));




// DEMO: Type info not available at runtime. Class info is. (And interfaces.)
//       (But class info is not duck typing.)

// function canRideRunTimeNotThatSmart(rider: any, horse: HorseType) {
//     if (horse instanceof FourLeggedHorseType) return true;
//     if (horse instanceof HorseClassRecordGeneric<4>) return true;
//     if (horse instanceof HorseClassRecordGeneric4) return true;
//     return horse.legs == 4;
// }
//
// class HorseClassRecordGeneric4 extends HorseClassRecordGeneric<4> {}