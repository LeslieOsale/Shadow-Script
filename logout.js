// ✅ Logout Function (Works for Sidebar Button)
window.logoutUser = function () {
    signOut(auth)
        .then(() => {
            alert("Logged out successfully!");
            window.location.href = "login.html"; // Redirect to Login
        })
        .catch((error) => {
            alert("Logout Failed: " + error.message);
        });
};