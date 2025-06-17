const products = [
  {
    title: "Cotton T-Shirt",
    price: 10,
    category: "Clothing",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2016/07/29/04/53/monterrey-1550422_1280.jpg",
  },
  {
    title: "Bluetooth Speaker",
    price: 25,
    category: "Electronics",
    rating: 3.8,
    image: "https://cdn.pixabay.com/photo/2019/07/02/07/39/bluetooth-4311748_1280.jpg",
  },
  {
    title: "Coffee Mug",
    price: 5,
    category: "Home",
    rating:4.1 ,
    image:"https://cdn.pixabay.com/photo/2016/11/29/02/10/caffeine-1866758_1280.jpg"
  },
  {
    title: "Running Shoes",
    price: 35,
    category: "Footwear",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2016/05/31/23/21/running-shoes-1428048_1280.jpg"
  }
];

const container = document.getElementById("productContainer");
const searchBar = document.getElementById("searchBar");

function displayProducts(items) {
  container.innerHTML = "";
  items.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Category: ${product.category}</p>
          <p class="card-text">Price: $${product.price}</p>
          <p class="card-text">Rating: ${product.rating}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

displayProducts(products);
