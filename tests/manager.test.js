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