use("wonderbread");

// Insert items
db.items.insertMany([
  {
    name: "Gaming Mouse",
    price: 59.99,
    sale: 45.0,
    height: 52,
    width: 32,
    length: 70,
    description: "RGB wireless mouse",
    fav: true,
  },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    sale: 85.0,
    height: "",
    width: "",
    length: "",
    description: "Blue switches",
    fav: true,
  },
  {
    name: "4K Monitor",
    price: 299.99,
    sale: 250.0,
    height: "",
    width: "",
    length: "",
    description: "27-inch UHD display",
    fav: true,
  },
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
