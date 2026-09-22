const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({ name: "Tony" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.findByIdAndDelete("6aa232feed3aa7213253cc50")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({age:48}).then((res)=>{
//   console.log(res);
// })

// User.findByIdAndUpdate('6aa232feed3aa7213253cc51', { age: 47 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("6aa230ff7d072082bafe5e8a") //age: { $gt: 47 }
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@yahoo.in", age: 47},
//   {name: "Bruce", email: "bruce@gmail.com", age: 30},
// ]).then((res)=>{
//   console.log(res);
// })

// const user2 = new User({
//   name: "Eve",
//   email: "eve@google.com",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
