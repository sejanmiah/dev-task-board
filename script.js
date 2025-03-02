document.querySelectorAll('.completed_button').forEach(button => {
    button.addEventListener("click", function(event) {
        alert("Hello Sejan")



        let currentTime = new Date().toLocaleTimeString();

        // Create the message
        let message = `You have completed the task Add Dark Mode at ${currentTime}`;

        // Create a new <p> tag with the message
        let pTag = document.createElement("p");
        pTag.textContent = message;

        // Append the new message to the taskMessages div
        document.getElementById("taskMessages").appendChild(pTag);



        

        const increaseP = document.getElementById("increase-value");
        let increaseNumber = parseInt(increaseP.innerText);
        increaseP.innerText = increaseNumber + 1;

        const decreaseP = document.getElementById("decrease-value");
        let decreaseNumber = parseInt(decreaseP.innerText);
        decreaseP.innerText = decreaseNumber - 1;


        if (decreaseNumber === 0) {
            alert("Value cannot go below 0!");
        } else {
            decreaseP.innerText = decreaseNumber - 1;
        }

        event.target.setAttribute("disabled", "true");
        
        event.target.style.backgroundColor = "gray";
        event.target.style.color = "white"; 
    });
});


// Dynamic date


function updateDate() {
    const dateElement = document.getElementById("current-date");
    const dayElement = document.getElementById("day-name");
    const today = new Date();

    const dateOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    const dayOptions = { weekday: 'long' };

    dateElement.innerText = today.toLocaleDateString("en-US", dateOptions);
    dayElement.innerText = today.toLocaleDateString("en-US", dayOptions);
}
updateDate();



// Hiddenm


function hideContent() {
    // Get all elements with the class 'contentToHide'
    let elements = document.querySelectorAll(".contentToHide");

    // Loop through each element and hide it
    elements.forEach(function(element) {
        element.style.visibility = "hidden";
    });
}




document.querySelector("#link_container").addEventListener("click", function() {
    window.location.href = "question.html";
});


function goBack() {
    window.history.back(); 
}




function goBack() {
    window.history.back(); // Goes back to the previous page
}

function changeBackground() {
    // Generate a random hex color
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Set the body background color
    document.body.style.backgroundColor = randomColor;
}