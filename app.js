// ===============================
// GoRide Nepal - app.js
// Homepage Vehicle Loader & Search
// ===============================

// Featured Vehicles Data
const vehicles = [
    {
        id: 1,
        name: "Hyundai Creta",
        type: "Car",
        price: "Rs. 6,500/day",
        image: "images/cars/creta.jpg"
    },
    {
        id: 2,
        name: "Royal Enfield Classic 350",
        type: "Bike",
        price: "Rs. 2,500/day",
        image: "images/bikes/classic350.jpg"
    },
    {
        id: 3,
        name: "Honda Dio",
        type: "Scooter",
        price: "Rs. 1,500/day",
        image: "images/bikes/dio.jpg"
    },
    {
        id: 4,
        name: "Mahindra Scorpio",
        type: "Jeep",
        price: "Rs. 8,000/day",
        image: "images/cars/scorpio.jpg"
    },
    {
        id: 5,
        name: "Toyota Fortuner",
        type: "Jeep",
        price: "Rs. 12,000/day",
        image: "images/cars/fortuner.jpg"
    },
    {
        id: 6,
        name: "Yamaha R15",
        type: "Bike",
        price: "Rs. 3,000/day",
        image: "images/bikes/r15.jpg"
    }
];

// DOM Elements
const vehicleContainer = document.getElementById("vehicleContainer");
const searchInput = document.getElementById("searchInput");
const category = document.getElementById("category");
const searchBtn = document.getElementById("searchBtn");

// Display Vehicles
function displayVehicles(list) {

    if (!vehicleContainer) return;

    vehicleContainer.innerHTML = "";

    list.forEach(vehicle => {

        vehicleContainer.innerHTML += `
        <div class="vehicle-card">

            <img src="${vehicle.image}" alt="${vehicle.name}">

            <div class="vehicle-card-content">

                <h3>${vehicle.name}</h3>

                <p>${vehicle.type}</p>

                <div class="price">${vehicle.price}</div>

                <a href="booking.html" class="book-btn">
                    Book Now
                </a>

            </div>

        </div>
        `;

    });

}

// Initial Load
displayVehicles(vehicles);

// Search
if(searchBtn){

searchBtn.addEventListener("click",()=>{

    const keyword = searchInput.value.toLowerCase();

    const selected = category.value.toLowerCase();

    const filtered = vehicles.filter(vehicle=>{

        const nameMatch = vehicle.name.toLowerCase().includes(keyword);

        const typeMatch = selected === "" ||
        vehicle.type.toLowerCase() === selected;

        return nameMatch && typeMatch;

    });

    displayVehicles(filtered);

});

}

// Press Enter to Search
if(searchInput){

searchInput.addEventListener("keyup",(e)=>{

    if(e.key==="Enter"){
        searchBtn.click();
    }

});

}