const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Student = require("./models/student.js");

app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27018/studentDirectory");
}

async function addStudent() {
  let student = new Student({
    name: "Rahul",
    branch: "CSE",
    year: 3,
    email: "rahul@gmail.com",
  });

  await student.save();
  console.log("student saved successfully");
}

addStudent();

app.get("/home", (req, res) => {
  res.send("Welcome to students directory");
});

app.get("/students", async (req, res) => {
  let { name, branch, year } = req.query;
  let filteredStudents = await Student.find();
  if (name) {
    filteredStudents = filteredStudents.filter((s) =>
      s.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (branch) {
    filteredStudents = filteredStudents.filter(
      (b) => b.branch.toLowerCase() === branch.toLowerCase()
    );
  }
  if (year) {
    filteredStudents = filteredStudents.filter((y) => y.year == year);
  }
  res.render("student.ejs", { students: filteredStudents });
});

app.get("/students/new", (req, res) => {
  res.render("new.ejs", { students });
});

app.post("/students", async (req, res) => {
  let { name, branch, year, email } = req.body;

  if (!name || !branch || !year || !email) {
    return res.send("All fields are required");
  }
  year = Number(year);
  if (year < 1 || year > 4) {
    return res.send("Year must be between 1 and 4");
  }

  let newStudent = new Student({
    name,branch,year,email
  });

  await newStudent.save();

  res.redirect("students");
});

app.patch("/students/:id", (req, res) => {
  let { id } = req.params;
  let newName = req.body.name;
  let newBranch = req.body.branch;
  let newYear = req.body.year;
  let newEmail = req.body.email;

  if (!newName || !newBranch || !newYear) {
    return res.send("All fields are required");
  }
  newYear = Number(newYear);
  if (newYear < 1 || newYear > 4) {
    return res.send("Year must be between 1 and 4");
  }

  let student = students.find((s) => id == s.id);
  student.name = newName;
  student.branch = newBranch;
  student.year = newYear;
  student.email = newEmail;
  console.log(student);
  res.redirect("/students");
});

app.get("/students/:id/edit", (req, res) => {
  let { id } = req.params;
  let student = students.find((s) => id == s.id);
  res.render("edit.ejs", { student });
});

app.get("/students/:id", (req, res) => {
  let { id } = req.params;
  let student = students.find((s) => id == s.id);
  if (student) {
    res.render("info.ejs", { student });
  } else {
    res.status(404).render("error.ejs", { id });
  }
});

app.delete("/students/:id", (req, res) => {
  let { id } = req.params;
  students = students.filter((s) => id != s.id);
  res.redirect("/students");
});

app.use((req, res) => {
  res.status(404).render("404.ejs");
});

app.listen(port, () => {
  console.log("Listening to port 8080");
});
