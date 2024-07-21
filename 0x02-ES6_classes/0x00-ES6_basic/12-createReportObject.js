export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return obj;
}
