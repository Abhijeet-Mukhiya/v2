// =======================================
// GoRide Nepal - wishlist.js
// =======================================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Add vehicle to wishlist
function addToWishlist(id) {

    // Prevent duplicates
    if (wishlist.includes(id)) {
        alert("This vehicle is already in your wishlist.");
        return;
    }

    wishlist.push(id);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Vehicle added to your wishlist ❤️");
}

// Remove vehicle from wishlist
function removeFromWishlist(id) {

    wishlist = wishlist.filter(vehicleId => vehicleId !== id);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Vehicle removed from wishlist.");
}

// Get wishlist
function getWishlist() {
    return wishlist;
}

// Clear wishlist
function clearWishlist() {
    wishlist = [];
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Make functions globally accessible
window.addToWishlist = addToWishlist;
window.removeFromWishlist = removeFromWishlist;
window.getWishlist = getWishlist;
window.clearWishlist = clearWishlist;