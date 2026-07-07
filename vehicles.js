// =======================================
// GoRide Nepal - vehicles.js
// Part 1
// =======================================

const vehicleData = [
  {
    id: 1,
    name: "Hyundai Creta",
    type: "Car",
    price: 6500,
    image: "images/cars/creta.jpg",
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    description: "Comfortable SUV for city and highway trips."
  },
  {
    id: 2,
    name: "Toyota Fortuner",
    type: "Jeep",
    price: 12000,
    image: "images/cars/fortuner.jpg",
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "Premium SUV suitable for long-distance travel."
  },
  {
    id: 3,
    name: "Mahindra Scorpio",
    type: "Jeep",
    price: 8000,
    image: "images/cars/scorpio.jpg",
    seats: 7,
    fuel: "Diesel",
    transmission: "Manual",
    description: "Powerful SUV for rough roads."
  },
  {
    id: 4,
    name: "Royal Enfield Classic 350",
    type: "Bike",
    price: 2500,
    image: "images/bikes/classic350.jpg",
    seats: 2,
    fuel: "Petrol",
    transmission: "Manual",
    description: "Classic touring motorcycle."
  },
  {
    id: 5,
    name: "Yamaha R15",
    type: "Bike",
    price: 3000,
    image: "images/bikes/r15.jpg",
    seats: 2,
    fuel: "Petrol",
    transmission: "Manual",
    description: "Sport bike with excellent performance."
  },
  {
    id: 6,
    name: "Honda Dio",
    type: "Scooter",
    price: 1500,
    image: "images/bikes/dio.jpg",
    seats: 2,
    fuel: "Petrol",
    transmission: "Automatic",
    description: "Lightweight scooter perfect for city rides."
  }
];

const grid = document.getElementById("vehicleGrid");
const search = document.getElementById("vehicleSearch");
const category = document.getElementById("vehicleCategory");
const modal = document.getElementById("vehicleModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
// =======================================
// GoRide Nepal - vehicles.js
// Part 2
// =======================================

function renderVehicles(list) {

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `
            <h2 style="grid-column:1/-1;text-align:center;">
                No vehicles found.
            </h2>
        `;
        return;
    }

    list.forEach(vehicle => {

        grid.innerHTML += `
        <div class="vehicle-item">

            <img src="${vehicle.image}" alt="${vehicle.name}">

            <div class="vehicle-info">

                <h3>${vehicle.name}</h3>

                <p>${vehicle.description}</p>

                <div class="vehicle-price">
                    Rs. ${vehicle.price.toLocaleString()} / day
                </div>

                <div class="vehicle-buttons">

                    <button class="details-btn"
                        onclick="showDetails(${vehicle.id})">
                        Details
                    </button>

                    <button class="wishlist-btn"
                        onclick="addToWishlist(${vehicle.id})">
                        ❤️ Wishlist
                    </button>

                </div>

            </div>

        </div>
        `;

    });

}

renderVehicles(vehicleData);

// Live Search & Filter

function filterVehicles() {

    const keyword = search.value.toLowerCase();

    const selected = category.value;

    const filtered = vehicleData.filter(vehicle => {

        const matchName =
            vehicle.name.toLowerCase().includes(keyword);

        const matchCategory =
            selected === "All" || vehicle.type === selected;

        return matchName && matchCategory;

    });

    renderVehicles(filtered);

}

if (search) {
    search.addEventListener("input", filterVehicles);
}

if (category) {
    category.addEventListener("change", filterVehicles);
}
// =======================================
// GoRide Nepal - vehicles.js
// Part 3 (Final)
// =======================================

// Show Vehicle Details
function showDetails(id) {

    const vehicle = vehicleData.find(v => v.id === id);

    if (!vehicle || !modal || !modalBody) return;

    modalBody.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}"
             style="width:100%;max-height:300px;object-fit:cover;border-radius:12px;">

        <h2 style="margin-top:20px;">${vehicle.name}</h2>

        <p><strong>Type:</strong> ${vehicle.type}</p>
        <p><strong>Seats:</strong> ${vehicle.seats}</p>
        <p><strong>Fuel:</strong> ${vehicle.fuel}</p>
        <p><strong>Transmission:</strong> ${vehicle.transmission}</p>

        <p style="margin:15px 0;">
            ${vehicle.description}
        </p>

        <h3 style="color:#0066ff;">
            Rs. ${vehicle.price.toLocaleString()} / day
        </h3>

        <button
            onclick="bookVehicle(${vehicle.id})"
            style="
                margin-top:20px;
                width:100%;
                padding:14px;
                background:#0066ff;
                color:white;
                border:none;
                border-radius:10px;
                cursor:pointer;
                font-size:16px;
                font-weight:bold;">
            Book Now
        </button>
    `;

    modal.style.display = "block";
}

// Close Modal
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Close on background click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Booking
function bookVehicle(id) {

    localStorage.setItem("selectedVehicle", id);

    window.location.href = "booking.html";
}

// Make functions globally accessible
window.showDetails = showDetails;
window.bookVehicle = bookVehicle;

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");