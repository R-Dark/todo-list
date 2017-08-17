const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}))


const todos = [
  "Daily Project"
];

const completed = [
  "Learn Node"
];

app.get("/", function(require, response) {
  response.render('index', {
    todos: todos,
    completed: completed
  });
});

app.post("/", function(require, response) {
  todos.push(require.body.todos);
  response.redirect('/');
})

app.post("/completed", function (require, response) {
  completed.push(require.body.button);
  response.redirect('/');
})

// let checked = document.querySelector('.checkbox')
//
// checked.onchange = function() {
//   if (this.checked) {
//     app.post("/completed", function(require, response) {
//       completed.push(require.body.button);
//       response.redirect('/');
//     })
//   }
// }

app.listen(3000, function() {
  console.log("Express started on port 3000")
})
