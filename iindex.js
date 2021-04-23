const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Choices = require('inquirer/lib/objects/choices');
var peoples = []

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

  const users = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'num',
        mesaage: 'how many of there are you',
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ]);
  };

for (let index = 0 ; index <  answers.num; index++) {
const id = index
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'names',
      message: 'What is there name?',
    },
    {
      type: 'list',
      name: 'ocupation',
      message: 'what is there job?',
      choices: ['manager', 'engineer', 'intern'],

    },
    {
      type: 'input',
      name: 'email',
      message: 'What is there email?',
    },

  ]);
};    
  if(answers.ocupation == "maneger"){
  var stick = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16"><path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/></svg>'
  const office = () => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'ell',
          message: 'What is there office num?',
        },
  ])}
  var thing = `office number: ${answers.ell}`
  return stick, thing
  }else if(promptUser.ocupation.answers == "engineer"){
  var stick = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16"><path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>'
  const office = () => {
      return inquirer.prompt([
       {
       type: 'input',
       name: 'ell',
       message: "what is your github name?",
    },
        
    ])}
    var thing = `github name: ${answers.ell}`
    return stick, thing
  }else if(promptUser.ocupation.answers == "intern"){
    var stick = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></svg>'
    const office = () => {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'ell',
            message: "What is there office num?what is you're school?",
          },
      ])}
      var thing = `school: ${answers.ell}`
      return stick, thing
    } 
  peoples.push(
`<div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> <div class="card-header"><h1>${answers.names}</h1> ${stick} <h2>${answers.ocupation}</h2></div> <div class="card-body"><ul class="list-group list-group-flush">
<li class="list-group-item">id: ${id} </li>
<li class="list-group-item">email: ${email}</li>
<li class="list-group-item">${thing}</li>
</ul> </div> </div>`
  )
}


const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title class="bg-danger" >My team</title>
</head>
<body>
${peoples}
</body>
</html>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
