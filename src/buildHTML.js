let htmlText = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css"/>
    <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
        integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
        crossorigin="anonymous"></script>
        <script defer src="./lib/Employee.js"></script>
    <title>Employee Management</title>
</head>

<body>
    <h1>Team Members</h1>
    <div class="container"></div>
    
    `


const generateHTML = (employeeList) =>{
	employeeList.forEach(employee =>{
  if (employee.getRole === 'Manager'){
htmlText += 
`<div class="card manager" style="width: 18rem;">
  <div class="card-body manager_header">
      <h2 class="card-title ">${employee.getName}</h2>
      <p class="card-text">Manager</p>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.getID}</li>
      <li class="list-group-item">Email: <a href = ${employee.getEmail}>Send Email</a></li>
      <li class="list-group-item">Number: ${employee.getOfficeNumber}</li>
  </ul>
</div>

`
  }
  else if (employee.getRole === 'Engineer'){
    htmlText +=
    `<div class="card engineer" style="width: 18rem;">
    <div class="card-body engineer_header">
        <h2 class="card-title">${employee.getName}</h2>
        <p class="card-text">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getID}</li>
        <li class="list-group-item">Email: <a href = ${employee.getEmail}>Send Email</a></li>
        <li class="list-group-item">GitHub: ${employee.getGitHub}</li>
    </ul>
  </div>
  
  `
  }else{
    htmlText += 
    `<div class="card intern" style="width: 18rem;">
    <div class="card-body intern_header">
        <h2 class="card-title">${employee.getName}</h2>
        <p class="card-text">Intern</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getID}</li>
        <li class="list-group-item">Email: <a href = ${employee.getEmail}>Send Email</a></li>
        <li class="list-group-item">School: ${employee.getSchool}</li>
    </ul>
    </div>
    
    `
  }
  })
  
  htmlText += 
`</div>
  </div>
</body>

</html>`
  
  return htmlText;
}

  module.exports = generateHTML;