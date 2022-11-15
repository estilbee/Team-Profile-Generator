const Engineer = require("../lib/engineer")


describe("Role test", () => {
    describe("Get role method - getRole", () => {
        it("should return 'Engineer' ", () => {
        const instance = "Engineer";    
        // Setup
        const engineer = new Engineer("name", "id", "email", "gitHub");
  
        // Expect/Execute
        expect(engineer.getRole()).toEqual(instance);
  
        // Teardown
      });
    });
  });

  test("Can set GitHub name via constructor arguments", () => {
    const testValue = "Estilbee";
    const e = new Employee(testValue);
    expect(e.getGithub()).toBe(testValue);
  });

  test("Can set GitHub name via constructor arguments", () => {
    const testValue = "Estilbee";
    const e = new Employee(testValue);
    expect(e.gitHub).toBe(testValue);
  });