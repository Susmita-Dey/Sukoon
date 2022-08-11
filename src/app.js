/*
  Running instruction: (in terminal)
  npm i
  npm run dev
 */

const express = require('express');
const path = require('path');
const app = express();
require("./db/conn");

const Register = require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const views_path = path.join(__dirname, '../views');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(static_path));
app.set('view engine', 'ejs');
app.set("views", views_path);

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/audioTherapy', (req, res) => {
  res.render('audioTherapy')
})

app.get('/readingTherapy', (req, res) => {
  res.render('readingTherapy')
})

app.get('/comingSoon', (req, res) => {
  res.render('comingSoon')
})

app.get('/laughTherapy', (req, res) => {
  res.render('laughTherapy')
})

app.get('/talkingTherapy', (req, res) => {
  res.render('talkingTherapy')
})

app.post('/signup', async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password === cpassword) {
      const registerPerson = new Register({
        email : req.body.email,
        password : req.body.password,
        confirmPassword : req.body.cpassword,
      })
      const registered = await registerPerson.save();
      res.status(201).render("index");
    }
    else {
      res.send("Password and confirm password are not matching.");
    }
  } catch (e) {
    res.status(400).send(e);
  }
})

app.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userEmail = await Register.findOne({ email: email});
    if (userEmail.password === password) {
      res.status(201).render("index");
    }
    else {
      res.send("Invalid details, Please try again.");
    }
  } catch (e) {
    res.status(400).send("Invalid details, Please try again.")
  }
})

app.listen(port, () => {
  console.log('server is running on port ' + port);
});
