document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const player = {
      fName: document.getElementById("fName").value.trim(),
      lName: document.getElementById("lName").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value,
      dob: document.getElementById("dob").value
    };

    const passwordValid = player.password.includes("!") || player.password.includes("?");
    const allFieldsFilled = Object.values(player).every(field => field);

    const resultDiv = document.getElementById("result");
    const statusMsg = document.getElementById("statusMsg");
    const playerInfo = document.getElementById("playerInfo");
    playerInfo.innerHTML = "";

    if (!allFieldsFilled) {
      statusMsg.textContent = "Registration Failed: All fields are required.";
      statusMsg.className = "text-warning";
    } else if (!passwordValid) {
      statusMsg.textContent = "Invalid Password. Must include '!' or '?'.";
      statusMsg.className = "text-warning";
    } else {
      const hiddenPassword = "*".repeat(player.password.length);
      statusMsg.textContent = "Welcome to Thronebound, get ready to embark on your journey!";
      statusMsg.className = "text-success";

      const playerDisplay = {
        "First Name": player.fName,
        "Last Name": player.lName,
        "Email": player.email,
        "Password": hiddenPassword,
        "Date of Birth": player.dob
      };

      for (const [key, value] of Object.entries(playerDisplay)) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${key}: ${value}`;
        playerInfo.appendChild(li);
      }
    }

    resultDiv.classList.remove("hidden");
  });
});
