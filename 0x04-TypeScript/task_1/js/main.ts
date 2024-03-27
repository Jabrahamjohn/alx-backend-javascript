class Teacher {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly fullTimeEmployee: boolean;
    private readonly yearsOfExperience?: number;
    private readonly location: string;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }


    // Getter methods
    getFirstName(): string {
        return this.firstName;
    }


    getLastName(): string {
        return this.lastName;
    }

    getFullTimeEmployee(): boolean {
        return this.fullTimeEmployee;
    }

    getYearsOfExperience(): number | undefined {
        return this.yearsOfExperience;
    }

    getLocation(): string {
        return this.location;
    }
}

let teacher = new Teacher('John', 'Doe', true, 'New York', 5);
teacher.contract = true;


