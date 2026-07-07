// =======================================
// GoRide Nepal - auth.js
// Signup & Login System (Frontend)
// =======================================

// ---------- SIGNUP ----------
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim().toLowerCase();
        const phone = document.getElementById("signupPhone").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check duplicate email
        const exists = users.some(user => user.email === email);

        if (exists) {
            alert("An account with this email already exists.");
            return;
        }

        users.push({
            name,
            email,
            phone,
            password
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}

// ---------- LOGIN ----------
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid email or password.");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert(`Welcome, ${user.name}!`);

        window.location.href = "dashboard.html";

    });

}

// ---------- LOGOUT ----------
function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

}

window.logout = logout;