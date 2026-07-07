// ===================================
// GoRide Nepal - darkmode.js
// Dark Mode Toggle
// ===================================

const darkModeBtn = document.getElementById("darkModeBtn");

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (darkModeBtn) {
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

// Toggle Theme
if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            darkModeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            darkModeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}