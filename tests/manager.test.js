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
    const e = new Manager("", 0, "a@b.c", testValue);
    expect(e.getOfficeNumber()).toEqual(testValue);
  });

  test("Can set GitHub name via constructor arguments", () => {
    const testValue = "25";
    const e = new Manager("", 0, "a@b.c", testValue);
    expect(e.officeNumber).toEqual(testValue);
  });