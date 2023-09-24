const express = require("express");
const app = express();
const port = 3000;

// Sample array of products
const products = [
  { id: 1, name: "Product 1", description: "Description 1", price: 10 },
  { id: 2, name: "Product 2", description: "Description 2", price: 20 },
  { id: 3, name: "Product 3", description: "Description 3", price: 30 },
];

// Middleware to serve static files (optional)
app.use(express.static("public"));

// Route for the homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Online Store</h1>");
});

// Route to display the list of products
app.get("/products", (req, res) => {
  res.send(
    "<h1>Products</h1>" +
      "<ul>" +
      products
        .map(
          (product) =>
            `<li><a href="/products/${product.id}">${product.name}</a></li>`
        )
        .join("") +
      "</ul>"
  );
});

// Dynamic route for product details
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.send(
      `<h1>${product.name}</h1><p>Description: ${product.description}</p><p>Price: $${product.price}</p>`
    );
  } else {
    res.status(404).send("<h1>Product not found</h1>");
  }
});

// Handling 404 errors
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found Nigga</h1>");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
