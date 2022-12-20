function addToArray<Type>(array: Array<Type>, entity: Type): Array<Type> {
    array.push(entity);
    return array;
}

let numbersArray = addToArray<number>([], 2);
let stringArray = addToArray<string>([], 'abc');

interface Hand {
    wave: Function;
}

interface RightHandedCreature {
    rightHand: Hand;
}

function waveWithRightHand<Type extends RightHandedCreature>(arg: Type): void {
    arg.rightHand.wave();
}

interface IHasLength {
    length: number;
}

function outputLength<Type extends IHasLength>(arg: Type): void {
    console.log(arg.length);
}

outputLength([]);
outputLength('abc');

class GenericValue<Type> {
    add: (x: Type, y: Type) => Type;
}

let genericNumber = new GenericValue<number>();
genericNumber.add = (x, y) => { return x + y; };
