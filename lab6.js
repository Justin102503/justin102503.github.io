document.getElementById("loadFactsBtn").addEventListener("click", function () {
    fetch("https://brianobruno.github.io/cats.json")
      .then(response => response.json())
      .then(data => {
        const sortedFacts = data.facts.sort((a, b) => a.factId - b.factId);
        const tableBody = document.querySelector("#factsTable tbody");
        tableBody.innerHTML = "";
        sortedFacts.forEach(fact => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${fact.factId}</td><td>${fact.text}</td>`;
          tableBody.appendChild(row);
        });
  
        if (data.catPhoto) {
          document.getElementById("catImage").src = data.catPhoto;
        }
      })
      .catch(error => {
        console.error("Error fetching cat facts:", error);
      });
  });
  