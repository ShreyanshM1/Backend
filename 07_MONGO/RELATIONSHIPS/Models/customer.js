//One to many/few (Approach 2)
const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Rahul Kumar",
//   });

//   // We have to extract details from another model(Order)
//   let order1 = await Order.findOne({ item: "Samosa" });
//   let order2 = await Order.findOne({ item: "Chocolate" });

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);

//   // let result = await Customer.find({});
//   // console.log(result);
// };

// addCustomer();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Chocolate", price: 40 },
//   ]);
//   console.log(res);
// };

// addOrders();

//Populate -> If we don't want an reference id and want a full fledge data we use populate
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

// findCustomer();

//Handling deletion
const addCust = async () => {
  let newCust = new Customer({
    name: "Harsh",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 109,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();
  console.log("added new customer");
};

//Customer has been deleted but their respective order is there in Order collection
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("6ab25a85a727a28079e1eeb7");
  console.log(data);
};

//addCust();
delCust();
