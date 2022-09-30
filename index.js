// Write your solution in this file!
const employee = {
    name: "Alton",
    streetAddress: "86 street",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
   const employee2 = {...employee};
   employee2[key]=value;
    return employee2
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const employee3 = {...employee};
    delete employee3.name;
    return employee3
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}