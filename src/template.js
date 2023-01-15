// Template for created team profile
const generateHTML = (input) => {
return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link rel="stylesheet" href="../dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
    <header>My Team</header>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>`
}

const generateCard = (member) => {
  let roleQ = '';
  let roleEmoji = '';

  if(member.role === 'Engineer') {
    roleQ = `GitHub: <a href="https://github.com/${member.git}>${member.git}</a>`;
    roleEmoji = '👓';
  } else if(member.role === 'Intern') {
    roleQ = `Education at: ${member.school}`;
    roleEmoji = '📖';
  } else if(member.role === 'Manager') {
    roleQ = `Office number: ${member.officeNum}`;
    roleEmoji = '🍵';
  }

  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${member.name}</h5>
    <p class="card-text">${roleEmoji} ${member.role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${member.id}</li>
    <li class="list-group-item">Email: <a href="mailto: ${member.email}?subject=Contact me" target="_blank">${member.email}</a></li>
    <li class="list-group-item">${roleQ}</li>
  </ul>
</div>`
}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;