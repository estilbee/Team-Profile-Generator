const Engineer = require("../lib/engineer")


describe("Role test", () => {
    describe("Get role method - getRole", () => {
      it("should return 'Engineer' ", () => {
        // Setup
        const engineer = new Engineer();
  
        // Expect/Execute
        expect(engineer.getRole()).toEqual("Engineer");
  
        // Teardown
      });
    });
  });