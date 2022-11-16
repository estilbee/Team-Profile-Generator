function generateHTML(employeeList){
    const newEmployeeList = []

function managerCard(employee){
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Name: ${employee.getName()}</p>
    <a href="${employee.email}" class="btn btn-primary"> Email: ${employee.getEmail()}</a>
    <p class="card-text">ID: ${employee.getId()}</p>
    <p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>
    </div>
</div>`
}

function engineerCard(employee){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <p class="card-text">Name: ${employee.getName()}</p>
      <a href="${employee.email}" class="btn btn-primary"> Email: ${employee.getEmail()}</a>
      <p class="card-text">ID: ${employee.getId()}</p>
      <p class="card-text">GitHub: ${employee.getGithub()}</p>
      </div>
  </div>`
  }

  function internCard(employee){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <p class="card-text">Name: ${employee.getName()}</p>
      <a href="${employee.email}" class="btn btn-primary"> Email: ${employee.getEmail()}</a>
      <p class="card-text">ID: ${employee.getId()}</p>
      <p class="card-text">School: ${employee.getSchool()}</p>
      </div>
  </div>`
  }


employeeList.forEach(function(employee){
    if (employee.getRole() === "Manager"){
        newEmployeeList.push(managerCard(employee))
    }
    else if (employee.getRole() === "Engineer"){
        newEmployeeList.push(engineerCard(employee))
    }
    else if (employee.getRole() === "Intern"){
        newEmployeeList.push(internCard(employee))
    }
})

return newEmployeeList.join("")
}

module.exports = employeeList => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel= "stylesheet" href= "./style.css" ></link>
<title></title>
</head>
<body>
<h2>Your Team </h2>
<main>
    ${generateHTML(employeeList)}
</main>
</body>
</html>
    `
}