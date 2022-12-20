type Name = string;
type LastName = string;
type DateOfBirth = Date;
type BankId = string | number;

type Person = {
    name: Name;
    lastName: LastName;
    dateOfBirth: DateOfBirth;
    bankId: BankId;
}

type Animal = {
    nickname: Name;
    dateOfBirth: DateOfBirth;
}

type Creature = Person | Animal;

type Device = {
    operatingSystem: string;
    cpuModel: string;
    input: string;
    output: string;
}

type Cyborg = Creature | Device;

const a: Cyborg = {
    name: 'Steven',
    lastName: 'Wilson',
    dateOfBirth: new Date(),
    bankId: '$RFT^&YUYH',
    operatingSystem: 'Android',
    cpuModel: 'Intel Core I5',
    input: '',
    output: '',
};

console.log(typeof a);
