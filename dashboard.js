// =======================================
// GoRide Nepal - dashboard.js
// =======================================

// Check Login
const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!currentUser) {
    alert("Please login first.");
    window.location.href = "login.html";
}

// Elements
const userProfile = document.getElementById("userProfile");
const bookingHistory = document.getElementById("bookingHistory");
const wishlistContainer = document.getElementById("wishlistContainer");

// Profile
if (userProfile && currentUser) {

    userProfile.innerHTML = `
        <div class="profile-item">
            <strong>Name:</strong> ${currentUser.name}
        </div>

        <div class="profile-item">
            <strong>Email:</strong> ${currentUser.email}
        </div>

        <div class="profile-item">
            <strong>Phone:</strong> ${currentUser.phone}
        </div>
    `;
}

// Booking History
const booking = JSON.parse(localStorage.getItem("bookingReceipt"));

if (bookingHistory) {

    if (booking) {

        bookingHistory.innerHTML = `
            <div class="booking-item">
                <strong>${booking.vehicle}</strong><br>
                Pickup: ${booking.pickup}<br>
                Return: ${booking.return}<br>
                ${booking.total}
            </div>
        `;

    } else {

        bookingHistory.innerHTML =
            "<p>No bookings found.</p>";

    }

}

// Wishlist
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const vehicleNames = {
    1: "Hyundai Creta",
    2: "Toyota Fortuner",
    3: "Mahindra Scorpio",
    4: "Royal Enfield Classic 350",
    5: "Yamaha R15",
    6: "Honda Dio"
};

function loadWishlist() {

    if (!wishlistContainer) return;

    if (wishlist.length === 0) {

        wishlistContainer.innerHTML =
            "<p>Your wishlist is empty.</p>";

        return;

    }

    wishlistContainer.innerHTML = "";

    wishlist.forEach(id => {

        wishlistContainer.innerHTML += `
            <div class="wishlist-item">

                <span>${vehicleNames[id] || "Vehicle"}</span>

                <button
                    class="remove-btn"
                    onclick="removeItem(${id})">
                    Remove
                </button>

            </div>
        `;

    });

}

function removeItem(id) {

    const updated = wishlist.filter(item => item !== id);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
    );

    location.reload();

}

window.removeItem = removeItem;

loadWishlist();