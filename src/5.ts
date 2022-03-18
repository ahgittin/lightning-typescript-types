import {HorseClass, HorseType} from "./1";
import {canRiderRide, Rider} from "./3";
import {FourLeggedHorseType} from "./2";

// DEMO: More power of types, when nested: Functions on types

interface CanTalk {
    canTalk(): boolean;
}

type MaybeTalking<Animal extends any> = Animal & CanTalk

type TalkingHorseType1 = MaybeTalking<HorseClass> &
    ({
        canTalk: () => false
    });

// DEMO: It enforces this, sometimes a little bit strictly

// class BadTalkingHorse extends HorseClass implements TalkingHorseType1 {
//     canTalk() { return false; }
//     // canTalk() { return false as false; }
//     // canTalk(): false { return false; }
// }

// DEMO: Has nobody heard of a talking horse?






type TalkingHorseType2 = MaybeTalking<HorseClass> &
    ({
        canTalk: () => false
    } | {
        name: 'Mr Ed',
    });

const redrum = new HorseClass("Redrum", 4);

const redrum2: TalkingHorseType2 = {
    ...redrum,
    canTalk: () => false,
}

// DEMO: Other values of name or legs cause errors.

const mrEd: TalkingHorseType2 & FourLeggedHorseType = {
    name: 'Mr Ed',
    legs: 4,
    canTalk: () => true,
}
