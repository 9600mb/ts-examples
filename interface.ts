interface Creature {
    name: string;
    dateOfBirth: Date;

    sayHello: Function;
}

class Human  implements  Creature {
    readonly name: string;
    dateOfBirth: Date;

    sayHello() {
        console.log('Hello');
    }

    bankId: string;
}

interface Employee {
    id: string;
    income: number;
}

interface FactoryWorker extends Creature, Omit<Employee, 'id'> {
    id: number;
    room: number;
}
