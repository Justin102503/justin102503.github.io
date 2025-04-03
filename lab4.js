document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault(); 




    let name = document.getElementById("name").value;

    let itemRequested = document.getElementById("itemRequested").value;

    let numItems = parseInt(document.getElementById("numItems").value);



    // Validate quantity

    if (isNaN(numItems) || numItems < 1 || numItems > 99) {

        alert("Invalid amount, please enter a number between 1-99.");

        return;

    }




    let currentTime = new Date();

    let hours = currentTime.getHours();

    let greeting = (hours < 12) ? "Good Morning" : (hours < 18) ? "Good Afternoon" : "Good Evening";




    let arrivalDate = new Date();

    arrivalDate.setDate(arrivalDate.getDate() + 7);

    let formattedArrivalDate = arrivalDate.toDateString();




    document.getElementById("orderDetails").innerHTML = `

        <h2>${greeting}, ${name}!</h2>

        <p>Thank you for your order.</p>

        <p><strong>Order Summary:</strong></p>

        <ul>

            <li><strong>Item:</strong> ${itemRequested}</li>

            <li><strong>Quantity:</strong> ${numItems}</li>

            <li><strong>Expected Arrival Date:</strong> ${formattedArrivalDate}</li>

        </ul>

        <p>Looking forward to shopping with you again!</p>

    `;




    document.getElementById("orderForm").reset();

});