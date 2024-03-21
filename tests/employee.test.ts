import { EmployeeInterface } from "../src/excercise-1/employee";

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