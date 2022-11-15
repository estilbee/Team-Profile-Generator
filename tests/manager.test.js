const Manager = require("../lib/manager")


describe("Role test", () => {
    describe("Get role method - getRole", () => {
        it("should return 'Manager' ", () => {
        const instance = "Manager";    
        // Setup
        const manager = new Manager("name", "id", "email", "officeNumber");
  
        // Expect/Execute
        expect(manager.getRole()).toEqual(instance);
  
        // Teardown
      });
    });
  });

  test("Can set Office Number name via constructor arguments", () => {
    const testValue = "25";
    const e = new Employee(testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });

  test("Can set GitHub name via constructor arguments", () => {
    const testValue = "25";
    const e = new Employee(testValue);
    expect(e.officeNumber).toBe(testValue);
  });