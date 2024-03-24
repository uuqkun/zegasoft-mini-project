import { summation, subtraction, division } from "../src/exercise-1/calculation";
import { EmployeeInterface } from "../src/exercise-1/employee";

describe('calculation.ts', () => {
    it("should return a proper value", () => {
        let a: number = 124;
        let b: number = 4;

        expect(summation(a, b)).toBe(128);
        expect(subtraction(a, b)).toBe(120);
        expect(division(a, b)).toBe(31);
    });
});


describe('employee', () => {
    it("should return an object", () => {
        let newEmployee: EmployeeInterface = {
            name: "Rifky",
            age: 24,
            nik: 3576578890978008,
            dateOfBirth: "07/09/2000",
            department: "IT",
            division: "Network System",
            position: "Head of Network Infrastructure",
            npwp: 36646747,
            accHolderName: "Rifky Budiman"
        };

        expect(newEmployee.age).toBe(24);
        expect(newEmployee).toBeInstanceOf(Object);
    });
});