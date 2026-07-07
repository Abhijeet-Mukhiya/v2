// =======================================
// GoRide Nepal - payment.js
// =======================================

function selectPayment(method) {

    // Save selected payment method
    localStorage.setItem("paymentMethod", method);

    // Get booking receipt if it exists
    let booking = JSON.parse(localStorage.getItem("bookingReceipt"));

    if (booking) {
        booking.paymentMethod = method;
        booking.paymentStatus = "Pending";
        localStorage.setItem("bookingReceipt", JSON.stringify(booking));
    }

    alert("You selected: " + method);

    // Redirect to receipt page
    window.location.href = "receipt.html";
}

// Make function globally available
window.selectPayment = selectPayment;