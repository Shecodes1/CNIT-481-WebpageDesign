document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date ();
    const currentYear = currentDate.getFullYear();
    const currentMonth =currentDate.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const fullMonthName = monthNames[currentMonth];
    const fullYear = currentYear;

    const calendarTitle = document.querySelector('.calendartitle');
    document.querySelector('.currentdate').textContent = `${fullMonthName} ${fullYear}`;
    
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysElement = document.querySelector('.days');
    daysElement.innerHTML = '';

    for (let i = 1; i <= totalDays; i++) {
        const dayElement = document.createElement('li');
        dayElement.textContent = i;
        if (i === currentDate.getDate() && currentYear === currentDate.getFullYear() && currentMonth === currentDate.getMonth()) {
            dayElement.classList.add('current-day');
        }
        daysElement.appendChild(dayElement);
    }
    for (let i = 0; i < firstDayOfMonth; i++) {
        const placeholder = document.createElement('li');
        placeholder.classList.add('placeholder');
        daysElement.appendChild(placeholder);
    }       
});

document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.currentdate');
    const previousBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    updateCalendar();

    previousBtn.addEventListener('click', function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear -= 1;
        } 
        else {
            currentMonth -= 1;
        }
        updateCalendar();
    });

    nextBtn.addEventListener('click', function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear += 1;
        } 
        else {
            currentMonth += 1;
        }
        updateCalendar();
    });

    function updateCalendar() {
        title.textContent = getMonthName(currentMonth) + ' ' + currentYear;
        updateDaysOfMonth();
    }

    function updateDaysOfMonth() {
        const daysList = document.querySelector('.days');
        daysList.innerHTML = ''; 

        const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

        for (let i = 1; i <= totalDays + firstDayOfMonth; i++) {
            const day = document.createElement('li');
            if (i > firstDayOfMonth) {
                day.textContent = i - firstDayOfMonth;
            }
            daysList.appendChild(day);
        }
    }

    function getMonthName(monthIndex) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[monthIndex];
    }
});

document.addEventListener("DOMContentLoaded", function() {
    function displayFavorites() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const favoritesList = document.getElementById("favoriteslist");
        favoritesList.innerHTML = ""; 
        if (favorites.length > 0) {
            favorites.forEach(function(exerciseName) {
                const listItem = document.createElement("li");
                listItem.textContent = exerciseName;
                favoritesList.appendChild(listItem);
            });
        } 
        else {
            const noFavorites = document.createElement("p");
            noFavorites.textContent = "You have no favorites yet!";
            favoritesList.appendChild(noFavorites);
        }
    }
    const showFavoritesLink = document.getElementById("showFavorites");
    showFavoritesLink.addEventListener("click", function(event) {
        const favoritesSection = document.getElementById("favoritessection");
        favoritesSection.style.display = "block"; 
        displayFavorites(); 
    });
});

localStorage.setItem("favorites", JSON.stringify([])); /* empties array; array is now empty when user loads pages */