document.addEventListener("DOMContentLoaded", function () {
    //State dd
    const stateDropdown = document.getElementById("state");
    const stateOptions = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

    stateOptions.forEach(function (state) {
        const option = document.createElement("option");
        option.text = state;
        stateDropdown.add(option);
    });

    //Calendar validation, age calculation and display
    const birthDateInput = document.getElementById("birthDate");

    birthDateInput.addEventListener("change", function () {
        const selectedDate = new Date(birthDateInput.value);
        const today = new Date();

        //Check if date is valid
        if (selectedDate > today) {
            alert("Please select an earlier date.");
            birthDateInput.value = '';
        }
        else {
            // Calculate and display age
            const age = today.getFullYear() - selectedDate.getFullYear();
            alert("Age: " + age + " years old");
        }

    });

    //appetizer dd
    const appetizerDropdown = document.createElement("select");
    appetizerDropdown.name = "appetizer";
    const appetizerOptions = ["Salad", "Soup", "Mozzarela Sticks", "Garlic Bread", "Tequeños", "Onion Rings"];
    appetizerOptions.forEach(function (option) {
        const opt = document.createElement("option");
        opt.text = option;
        appetizerDropdown.appendChild(opt);
    });

    // Entre dd
    const entreeDropdown = document.createElement("select");
    entreeDropdown.name = "entree";
    const entreeOptions = ["Steak", "Salmon", "Pasta", "Parmesan Chicken", "Burger", "Ribs", "Pizza", "Fish and Chips"];
    entreeOptions.forEach(function (option) {
        const opt = document.createElement("option");
        opt.text = option;
        entreeDropdown.appendChild(opt);
    });

    // Dessert dd
    const dessertDropdown = document.createElement("select");
    dessertDropdown.name = "dessert";
    const dessertOptions = ["Chocolate Cake", "Cheesecake", "Tiramisu", "Apple Pie", "Ice Cream", "Fruit Salad", "Pie", "Creme Brulee", "Chocolate Mousse", "Brownie"];
    dessertOptions.forEach(function (option) {
        const opt = document.createElement("option");
        opt.text = option;
        dessertDropdown.appendChild(opt);
    });

    // Append the dropdowns 
    document.getElementById("dropdowns").appendChild(appetizerDropdown);
    document.getElementById("dropdowns").appendChild(entreeDropdown);
    document.getElementById("dropdowns").appendChild(dessertDropdown);

    // Create a div to display the meal selection
    const mealSelectionDiv = document.createElement("div");
    mealSelectionDiv.id = "mealSelection";
    dropdowns.insertAdjacentElement("afterend", mealSelectionDiv);
    //create reaset button 
    const resetButton = document.createElement("button");
    resetButton.id = "resetButton";
    resetButton.style.display = "none";
    resetButton.textContent = "Reset";
    resetButton.type= "button"
    confirmButton.insertAdjacentElement("afterend", resetButton);

    // Function to display the meal selection
    function displayMealSelection() {
        const appetizerValue = document.querySelector('select[name="appetizer"]').value;
        const entreeValue = document.querySelector('select[name="entree"]').value;
        const dessertValue = document.querySelector('select[name="dessert"]').value;
        // hide confirm button and dropdowns 
        confirmButton.style.display = "none";
        dropdowns.style.display = "none";

        // Show Reset button and display  meal selection
        resetButton.style.display = "block";
        mealSelectionDiv.innerHTML = `Your meal will be: <br> <strong>Appetizer:</strong> ${appetizerValue},<br> <strong>Entrée:</strong> ${entreeValue},<br><strong>Dessert:</strong> ${dessertValue}.`;
    }

    // Function to reset dropdowns and button 
    function resetFormView() {

        confirmButton.style.display = "block";
        dropdowns.style.display = "block";
        resetButton.style.display = "none";

        mealSelectionDiv.innerHTML = '';
    }

    // Add event listeners to buttons
    confirmButton.addEventListener("click", displayMealSelection);
    resetButton.addEventListener("click", resetFormView);


});