function openSidebar() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// ✅ Close sidebar when clicking on overlay
document.getElementById('overlay').addEventListener('click', closeSidebar);

// ✅ Close sidebar when clicking outside (but NOT when clicking inside the sidebar)
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');

    // ✅ Check if the click is NOT inside sidebar & NOT on the menu button
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target) && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});
