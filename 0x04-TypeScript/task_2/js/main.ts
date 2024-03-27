export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}