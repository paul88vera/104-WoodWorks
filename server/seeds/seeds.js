use("wonderbread");

// Insert items
db.items.insertMany([
  { name: "Gaming Mouse", price: 59.99, description: "RGB wireless mouse" },
  { name: "Mechanical Keyboard", price: 89.99, description: "Blue switches" },
  { name: "4K Monitor", price: 299.99, description: "27-inch UHD display" },
]);

// Insert user with cart
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  cart: [
    { item: db.items.findOne({ name: "Gaming Mouse" })._id, quantity: 2 },
    {
      item: db.items.findOne({ name: "Mechanical Keyboard" })._id,
      quantity: 1,
    },
  ],
});

// Insert comments
db.comments.insertMany([
  {
    item: db.items.findOne({ name: "Gaming Mouse" })._id,
    user: "Bob",
    rating: 5,
    text: "Amazing mouse!",
  },
  {
    item: db.items.findOne({ name: "Mechanical Keyboard" })._id,
    user: "Dana",
    rating: 4,
    text: "Solid keyboard!",
  },
]);

print("✅ Seeded sample data");
