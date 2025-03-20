
alert("Welcome to my online store!");




let name = prompt("Enter your name:");

let itemRequested = prompt("What item would you like to order?");

let numItems = parseInt(prompt("Enter the Number of Items between 1-99:"));




if (isNaN(numItems) || numItems < 1 || numItems > 99) {

    alert("Invalid amount, please enter a number between 1-99.");

} else {


    let currTime = new Date();

    let hours = currTime.getHours();

    let greeting;



    if (hours < 12) {

        greeting = "Good Morning";

    } else if (hours < 18) {

        greeting = "Good Afternoon";

    } else {

        greeting = "Good Evening";

    }




    let arrivalDate = new Date();

    arrivalDate.setDate(arrivalDate.getDate() + 7);

    let formattedArrivalDate = arrivalDate.toDateString();


    let orderDetails = `

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



    document.getElementById("orderDetails").innerHTML = orderDetails;

}