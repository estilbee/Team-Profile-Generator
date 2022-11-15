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
    const e = new Engineer(testValue);
    expect(e.getGithub()).toEqual(testValue);
  });

  test("Can set GitHub name via constructor arguments", () => {
    const testValue = "Estilbee";
    const e = new Engineer(testValue);
    expect(e.gitHub).toEqual(testValue);
  });