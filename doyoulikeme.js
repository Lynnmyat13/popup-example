// Show popup when "Yes" button is clicked
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Move "No" button to a random position on the whole page when hovered over
document.getElementById("noButton").addEventListener("mouseenter", function() {
    const button = document.getElementById("noButton");

    // Get random coordinates within the viewport
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    // Apply the new position
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});
