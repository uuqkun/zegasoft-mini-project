interface EmployeeInterface {
   name: string;
   age: number;
   nik: number;
   dateOfBirth: string;
   department: string;
   division: string;
   position: string;
   npwp: number;
   accHolderName: string;
};

let newEmployee:EmployeeInterface = {
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


// Menambahkan 2 angka
let summation = (a: number, b: number) : number => {
    return a + b;
}

// subtraction
let subtraction = (a: number, b: number) : number => {
    return a - b;
}

// division
let division = (a: number, b: number) : number =>{
    return a / b;
}

let a: number = 124;
let b: number = 4;

console.log(summation(a, b));
console.log(subtraction(a, b));
console.log(division(a, b));





