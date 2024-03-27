export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propNAME: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}