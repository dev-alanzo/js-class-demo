export interface PersonInterface {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
}

export class Person implements PersonInterface {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    constructor(firstName: string, lastName: string, dateOfBirth: string) {
        let dobArr = dateOfBirth.split('/').map(str => {
            return parseInt(str)
        });
        this.firstName = firstName;
        this.lastName = lastName;

        this.dateOfBirth = new Date(dobArr[0], dobArr[1] - 1, dobArr[2]);
    }

    fullName() :string {
        return `${this.firstName} ${this.lastName}`;
    }

    greet(): string {
        return `Hi my name is ${this.fullName()}`;
    }

    getAge(): string {
        let ageTimeDiff = new Date().getTime() - this.dateOfBirth.getTime();
        let ageDate = new Date(ageTimeDiff);

        return `I am ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old.`
    }
}

export class User extends Person {
    displayName: string;
    emailAddress: string;

    constructor(firstName: string, lastName: string, dateOfBirth: string, displayName: string, emailAddress: string) {
        super(firstName, lastName, dateOfBirth);
        this.displayName = displayName;
        this.emailAddress = emailAddress;
    }

    greet(): string {
        return `Hi my name is ${this.displayName}`;
    }
}