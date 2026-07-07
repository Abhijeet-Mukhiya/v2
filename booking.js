// =======================================
// GoRide Nepal - booking.js
// =======================================

// Vehicle Data
const vehicles = [
    { id: 1, name: "Hyundai Creta", price: 6500 },
    { id: 2, name: "Toyota Fortuner", price: 12000 },
    { id: 3, name: "Mahindra Scorpio", price: 8000 },
    { id: 4, name: "Royal Enfield Classic 350", price: 2500 },
    { id: 5, name: "Yamaha R15", price: 3000 },
    { id: 6, name: "Honda Dio", price: 1500 }
];

const selectedVehicleDiv = document.getElementById("selectedVehicle");
const pickupDate = document.getElementById("pickupDate");
const returnDate = document.getElementById("returnDate");
const totalPrice = document.getElementById("totalPrice");
const bookingForm = document.getElementById("bookingForm");

let selectedVehicle = null;

// Load Selected Vehicle
const selectedId = Number(localStorage.getItem("selectedVehicle"));

selectedVehicle = vehicles.find(v => v.id === selectedId);

if (selectedVehicle && selectedVehicleDiv) {

    selectedVehicleDiv.innerHTML = `
        <h3>${selectedVehicle.name}</h3>
        <p>Price: Rs. ${selectedVehicle.price.toLocaleString()} / day</p>
    `;

}

// Calculate Total
function calculatePrice() {

    if (!pickupDate.value || !returnDate.value || !selectedVehicle) return;

    const start = new Date(pickupDate.value);
    const end = new Date(returnDate.value);

    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (days > 0) {

        const total = days * selectedVehicle.price;

        totalPrice.textContent =
            `Total: Rs. ${total.toLocaleString()}`;

    } else {

        totalPrice.textContent =
            "Select valid dates.";

    }

}

pickupDate.addEventListener("change", calculatePrice);
returnDate.addEventListener("change", calculatePrice);

// Booking
bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const booking = {
        vehicle: selectedVehicle.name,
        pickup: pickupDate.value,
        return: returnDate.value,
        total: totalPrice.textContent
    };

    localStorage.setItem(
        "bookingReceipt",
        JSON.stringify(booking)
    );

    alert("Booking Successful!");

    window.location.href = "receipt.html";

});