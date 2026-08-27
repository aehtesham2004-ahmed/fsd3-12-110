import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const product = [
    {
      name: "Iphone",
      price: 85000,
      qty: 2,
      discount: 15,
    },
    {
      name: "hp Laptop",
      price: 55000,
      qty: 1,
      discount: 25,
    },
  ];

  res.end(JSON.stringify(product));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
