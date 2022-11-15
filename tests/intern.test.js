const Intern = require("../lib/intern")


describe("Role test", () => {
    describe("Get role method - getRole", () => {
        it("should return 'Intern' ", () => {
        const instance = "Intern";    
        // Setup
        const intern = new Intern("name", "id", "email", "school");
  
        // Expect/Execute
        expect(intern.getRole()).toEqual(instance);
  
        // Teardown
      });
    });
  });