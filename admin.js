// =======================================
// GoRide Nepal - admin.js
// =======================================

// Get data from localStorage
const users = JSON.parse(localStorage.getItem("users")) || [];
const booking = JSON.parse(localStorage.getItem("bookingReceipt"));
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Statistics
const totalUsers = document.getElementById("totalUsers");
const totalBookings = document.getElementById("totalBookings");
const wishlistCount = document.getElementById("wishlistCount");
const userTable = document.getElementById("userTable");

if (totalUsers) {
    totalUsers.textContent = users.length;
}

if (totalBookings) {
    totalBookings.textContent = booking ? 1 : 0;
}

if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
}

// Display Users
if (userTable) {

    if (users.length === 0) {

        userTable.innerHTML = `
            <tr>
                <td colspan="3" style="text-align:center;">
                    No registered users found.
                </td>
            </tr>
        `;

    } else {

        users.forEach(user => {

            userTable.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>
            `;

        });

    }

}