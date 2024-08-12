document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createnewworkout').addEventListener("click", function(event) {
    const workoutName = prompt("Enter the name of your new workout:");

    if (workoutName) {
        const newWorkout = document.createElement("div");
        newWorkout.classList.add("workout");

        const workoutNameElement = document.createElement("p1");
        workoutNameElement.classList.add("workoutname");
        workoutNameElement.textContent = workoutName;
        newWorkout.appendChild(workoutNameElement);

        const pulldownMenu = document.createElement("div");
        pulldownMenu.classList.add("pulldownmenu");
        newWorkout.appendChild(pulldownMenu);

        const exercisesList = document.createElement("div");
        exercisesList.classList.add("exercises");
        const ul = document.createElement("ul");
        exercisesList.appendChild(ul);
        newWorkout.appendChild(exercisesList);

        const gearClick = document.createElement("div");
        gearClick.classList.add("gearclick");
        const gear = document.createElement("div");
        gear.classList.add("gear");
        gear.innerHTML = '<i class="fa-solid fa-gear fa-2x fa-fw"></i>';
        gearClick.appendChild(gear);
        
        const menu = document.createElement("div");
        menu.classList.add("menu");
        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "Edit Name";
        menu.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete Workout";
        menu.appendChild(deleteButton);

        gearClick.appendChild(menu);
        newWorkout.appendChild(gearClick);

        document.getElementById("container").appendChild(newWorkout); /* allows new element to be aligned in the flexbox, but spacing next to the new element is off for some reason */
    }
    });
});

document.addEventListener('DOMContentLoaded', function() { /* DOMcontentloaded ensures the JS script only runs when the HTML page is fully loaded. I ran into issues where JS was not running because the html was still loading/parsing; this is kind of like a force complete */ 
    const gearClick = document.querySelectorAll('.gearclick');

    gearClick.forEach(area => {
        area.addEventListener('click', gearMenu);
    }) /* event listener for gear click menu */ 

    function gearMenu(event) {
        const menu = event.currentTarget.querySelector('.menu');
        menu.classList.toggle('show');
        const allMenus = document.querySelectorAll('.menu');
        allMenus.forEach(m => {
            if (m !== menu) {
                m.classList.remove('show');
            }
        })
    } /* this function displays the gear menu created in the html file/CSS and displays it; function makes it so only one menu can be open at a time on each workout item */ 

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteWorkout);
    }) /*  queueing the delete button for when it's clicked */

    function deleteWorkout(event) {
        const confirmDelete = confirm("Are you sure you want to delete this workout? Once you click 'ok', this action cannot be undone.");
        if (confirmDelete) {
            const workoutItem = event.target.closest('.workout');
            workoutItem.remove();
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit');

    editButtons.forEach(button => {
        button.addEventListener('click', handleEditName);
    });

function handleEditName(event) {
    const workoutItem = event.target.closest('.workout'); /* you need to use the event closest because if you do the document query selector, it will only go to the first workout element and change that name. This targets the closest workout element in relation to the gear icon the user has clicked */
    const workoutNameElement = workoutItem.querySelector('.workoutname');
    const inputField = document.createElement('input');

    inputField.type = 'text';
    inputField.value = workoutNameElement.textContent.trim(); /* removes leading and trailing white spaces when the user is inputting the new workout name */

    inputField.classList.add('renameworkout'); /*displays the CSS field for the user to enter the new name of the workout */
    workoutNameElement.replaceWith(inputField);
    inputField.focus(); /* automatically puts the mouse cursor in the CSS field instead of the user having to click the field to edit */

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            workoutItem.querySelector('.renameworkout').replaceWith(workoutNameElement);
            workoutNameElement.textContent = inputField.value.trim();
            inputField.remove();
            workoutNameElement.style.display = 'inline-block';
        }
    }); /* once the user presses enter, the name of the workout is changed */
}
});




