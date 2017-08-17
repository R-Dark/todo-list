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

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

app.post("/completed", function (req, res) {
  let remove = req.body.button
  todos.splice(todos.indexOf(remove),1
  );
  completed.push(remove);
  res.redirect('/');
})

app.listen(3000, function() {
  console.log("Express started on port 3000")
})
