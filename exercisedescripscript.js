/* reference for instagram heart: https://codepen.io/bneupane/pen/KMKzZZ */ 

document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const heartIcon = heart.querySelector("i");

    heart.addEventListener("click", function() {
        if (heartIcon.classList.contains("fa-heart")) {
            heartIcon.classList.remove("fa-heart");
            heartIcon.classList.add("fa-heart-o");
            heart.classList.remove("liked");
        } else {
            heartIcon.classList.remove("fa-heart-o");
            heartIcon.classList.add("fa-heart");
            heart.classList.add("liked");

            heartMessage.style.display = "block";
            setTimeout(function() {
                heartMessage.style.display = "none";
            }, 2000);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function toggleFavorite(exerciseName) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const index = favorites.indexOf(exerciseName);
        if (index === -1) {
            favorites.push(exerciseName); /* Add exercise name to favorites */
        } 
        else {
            favorites.splice(index, 1); /* Remove exercise name from favorites if already in array, but array should be empty */
        }
        localStorage.setItem("favorites", JSON.stringify(favorites)); /* locally stores array */
        // console.log("favorites list: ", favorites);
    }
    const heart = document.getElementById("heart");
    const exerciseName = "Dumbbell Bicep Curl"; /* more var would be added if other pages created for "hearting" other exercises */
    heart.addEventListener("click", function() {
        toggleFavorite(exerciseName);
    });
});





