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

  test("Can set school name via constructor arguments", () => {
    const testValue = "USC";
    const e = new Employee(testValue);
    expect(e.getSchool()).toBe(testValue);
  });

  test("Can set school name via constructor arguments", () => {
    const testValue = "USC";
    const e = new Employee(testValue);
    expect(e.school).toBe(testValue);
  });