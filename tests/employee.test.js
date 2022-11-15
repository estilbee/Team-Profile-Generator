const Employee = require("../lib/employee")

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Max", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Max", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  test("Can set name via constructor arguments", () => {
    const name = "Olivia";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
  });

  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Max", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Max", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  describe("Role test", () => {
    describe("Get role method - getRole", () => {
        it("should return 'Employee' ", () => {
        const instance = "Employee";    
        // Setup
        const employee = new Employee("name", "id", "email");
  
        // Expect/Execute
        expect(employee.getRole()).toEqual(instance);
  
        // Teardown
      });
    });
  });