function toggleMenu() {
    let menuContainer = document.getElementById("menuContainer");
    // When menu is hidden, bring it out and listen for a click outside the menu
    if (menuContainer.style.right === "-250px" || menuContainer.style.right === "") {
        menuContainer.style.right = "0";
        document.addEventListener("click", closeMenu);
    } else {
        menuContainer.style.right = "-250px";
        document.removeEventListener("click", closeMenu);
    }
}

function closeMenu(event) {
    let menuContainer = document.getElementById("menuContainer");
    const navButton = document.getElementById("navButton");

    // Make sure the event is a click OUTSIDE the menu
    if (!menuContainer.contains(event.target) && event.target !== navButton) {
        menuContainer.style.right = "-250px";
        document.removeEventListener("click", closeMenu);
    }
}